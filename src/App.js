import "./App.css";
import Navbar from "./compnents/Navbar";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  XAUs_Totak_Supply,
  USDM_Totak_Supply,
  GCS_Totak_Supply,
} from "./Web3/Web3";
import axios from "axios";
import Main from "./compnents/Main";
import Swap from "./compnents/Swap";
import Footer from "./compnents/Footer";

function App() {
  const [xausSupply, setXausSupply] = useState(0);
  const [usdmSupply, setUsdmSupply] = useState(0);
  const [gcsSupply, setGcsSupply] = useState(0);

  useEffect(() => {
    const init = async () => {
      const xaus = await XAUs_Totak_Supply();
      setXausSupply(xaus);
      const gcs = await GCS_Totak_Supply();
      setGcsSupply(gcs);
      const usdm = await USDM_Totak_Supply();
      setUsdmSupply(usdm);

      const closeprice = await axios
        .get("https://sapi.gcex.lt/v1/market/tickers", {})
        .then(function (response) {
          return Number(response.data.data["GCS/USDT"].close);
        })
        .catch(function (error) {
          console.log(error);
        });

      const mmk = await axios
        .get(`https://apigctech.ap.ngrok.io/mmkprice`)
        .then(function (response) {
          response.data.reverse();
          return response.data[0].price;
        })
        .catch(function (error) {
          console.log("Error", error);
        });

      const govt = await axios
        .get(`https://apigctech.ap.ngrok.io/values`)
        .then(function (response) {
          return response.data[0].govt;
        })
        .catch(function (error) {
          console.log(error);
        });

      let headersXau = {
        "x-access-token": "goldapi-6vbttl4viue6x-io",
        "Content-Type": "application/json",
      };

      let xauOptions = {
        url: "https://www.goldapi.io/api/XAU/USD",
        method: "GET",
        headers: headersXau,
      };
      const xau = await axios.request(xauOptions).then(function (response) {
        return response.data.price;
      });

      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      };
      let reqOptions = {
        url: "https://api.exchangerate.host/convert?from=USD&to=CNH",
        method: "GET",
        headers: headersList,
      };
      const btwo = await axios.request(reqOptions).then(function (response) {
        return Number(response.data.info.rate).toFixed(5);
      });

      Calculation(xaus, gcs, usdm, closeprice, mmk, govt, xau, btwo);
    };
    init();
  }, []);
  const [gcsmaketcap, setGcsSupplyCap] = useState(0);
  const [gcstousd, setGcstoUsd] = useState(0)
  const [gcsusdm, setGcsusdm] = useState(0)
  const [xaustousd, setXaustoUsd] = useState(0)
  const [xausmk, setXausmk] = useState(0);
  const [usdmtousdt, setUsdmtousdt] = useState(0);
  const [usdmmarketcap, setUsdmMarketcap] = useState(0);
  const [xaustogcs, setXausGcs] = useState(0);
  const [xaustousdm, setXaustousdm] = useState(0);


  const Calculation = (xaus, gcs, usdm, closeprice, mmk, govt, xau, btwo) => {
    const gcsmk = (Number(closeprice) * 5000000).toFixed(0);
    setGcsSupplyCap(gcsmk)
    const gcstousd = closeprice;
    setGcstoUsd(closeprice)
    const gcsusdm = (mmk * closeprice) / govt;
    setGcsusdm(gcsusdm)
    const xaustousd = ((xau / 31.1025) * 0.425 * 1.03).toFixed(5);
    setXaustoUsd(xaustousd)
    const xausmk = Number(xaus * ((xau / 31.1025) * 0.425 * 1.03).toFixed(5)).toFixed(0);
    setXausmk(xausmk)
    const usdmtousdt = Number(closeprice / gcsusdm).toFixed(5);
    setUsdmtousdt(usdmtousdt)
    const usdmmk = 755030 * closeprice;
    setUsdmMarketcap(usdmmk)
    const xaustogcs = (((xau / 31.1025) * 0.425 * 1.03) / gcstousd).toFixed(5);
    setXausGcs(xaustogcs)
    const xaustousdm = Number(((xau / 31.1025) * 0.425 * 1.03) / (3 / btwo)).toFixed(5);
    setXaustousdm(xaustousdm)
  };

  return (
    <div className="App">
      <Navbar />
      <Main gcsmaketcap={gcsmaketcap} gcstousd={gcstousd} gcsusdm={gcsusdm} xaustousd={xaustousd} xausmk={xausmk} usdmtousdt={usdmtousdt} usdmmarketcap={usdmmarketcap} xaustogcs={xaustogcs} xaustousdm={xaustousdm}/>
      <Swap />
      <Footer/>
    </div>
  );
}

export default App;
