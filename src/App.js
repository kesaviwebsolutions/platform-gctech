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

      Calculation(xaus, gcs, usdm, closeprice);
    };
    init();
  }, []);

  const Calculation = (xaus, gcs, usdm, closeprice) => {
    const gcsmk = (Number(closeprice) * 5000000).toFixed(0);
    const gcstousd = closeprice;
  };

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
