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
          return response.data.price
        });

      Calculation(xaus, gcs, usdm, closeprice, mmk, govt, xau);
    };
    init();
  }, []);

  const Calculation = (xaus, gcs, usdm, closeprice, mmk, govt, xau) => {
    const gcsmk = (Number(closeprice) * 5000000).toFixed(0);
    const gcstousd = closeprice;
    const gcsusdm = (mmk * closeprice) / govt;
    const xaustousd = ((xau / 31.1025) * 0.425 * 1.03).toFixed(5);
    const xausmk = Number((xaus)*(((xau / 31.1025) * 0.425 * 1.03).toFixed(5))).toFixed(0)
    const usdmtousdt = Number(closeprice/gcsusdm).toFixed(5)
    const usdmmk = 755030 * closeprice
    const xaustogcs = (((xau / 31.1025) * 0.425 * 1.03)/gcstousd).toFixed(5)
    const xaustousdm = Number(((xau / 31.1025) * 0.425 * 1.03)/(3 / bTwo)).toFixed(5)
    // console.log("gcs market"+gcsmk+" gcstousd"+gcstousd+" gcsusdm"+gcsusdm)
  };

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Swap/>
    </div>
  );
}

export default App;
