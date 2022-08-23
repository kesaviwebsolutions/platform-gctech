
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button, ButtonBase, Grid, Typography } from "@mui/material";
import { MDBIcon } from "mdb-react-ui-kit";
import { Box, Container } from "@mui/system";
import toast, { Toaster } from 'react-hot-toast';
import { getTokenBalancegcs, getTokenBalanceusdm, SwapToken, SwapToken2,SwapToken3 } from "../Web3/Web3";


const notify = () => toast('Swap Success');

const usdm = "0xC299d796Edf61C2230F2212157C4A2bFe8fCb17a"
const gcs = "0xdeB4054d11915De4A6aFB7F2000d4c04525E4396"
const xaus = "0x33675d969eECB85A16Dc55F21D88D914a5e633FE"
const usdt = "0xFCc496973bdBe5fD4C6655DA6fA8C100701bBDDB";

export default function Swap({gcsusdm, xaustousdm, acount, xaustousd}) {
  const [swap, setSwap] = useState(true);
  const [swap2, setSwap2] = useState(true);
  const [swap3, setSwap3] = useState(true);
  const [gcsBalance, setGcsBalance] = useState(0);
  const [usdmBalance, setUsdmBalance] = useState(0);
  const [amount, setAmount] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [amount3, setAmount3] = useState(0)
  const [usdtbal, setUsdtbalance] = useState(0);
  const [xausbal, setXausbalance] = useState(0)

  useEffect(()=>{
    const init = async()=>{
      const gcsbal = await getTokenBalancegcs(gcs);
      setGcsBalance(gcsbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
      const xausbal = await getTokenBalancegcs(xaus);
      setXausbalance(xausbal)
      const usdtbal = await getTokenBalanceusdm(usdt);
      setUsdtbalance(usdtbal);
    }
    init();
  },[acount])

  const Swap = async()=>{
    const data = await SwapToken(swap,amount,gcsusdm,usdm,gcs);
    if(data.status){
      notify();
      const gcsbal = await getTokenBalancegcs(gcs);
      setGcsBalance(gcsbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
    }
  }

  const Swap2 = async()=>{
    const data = await SwapToken2(swap2,amount2,xaustousdm,usdm,xaus);
    if(data.status){
      notify();
      const xausbal = await getTokenBalancegcs(xaus);
      setXausbalance(xausbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
    }
  }
  const Swap3 = async()=>{
    const data = await SwapToken3(swap3,amount3,xaustousd,xaus,usdt);
    if(data.status){
      notify();
      const xausbal = await getTokenBalancegcs(xaus);
      setXausbalance(xausbal)
      const usdtbal = await getTokenBalanceusdm(usdt);
      setUsdtbalance(usdtbal);
    }
  }



  const maxforgcsusdm = ()=>{
    if(swap){
      setAmount(gcsBalance)
    }
    else{
      setAmount(usdmBalance)
    }
  }

  const maxforgcsusdm2 = ()=>{
    if(swap2){
      setAmount2(usdmBalance)
    }
    else{
      setAmount2(xausbal)
    }
  }

  const maxforgcsusdm3 = ()=>{
    if(swap3){
      setAmount3(xausbal)
    }
    else{
      setAmount3(usdtbal)
    }
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <MDBCard className="my-5 mx-3">
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                >
                  SWAP
                </MDBCardTitle>
                <MDBCardSubTitle
                  className="text-center"
                  style={{
                    color: "#787373",
                    borderBottom: "1px solid #a5a0a0",
                  }}
                >
                  Trade tokens in an instant
                </MDBCardSubTitle>
                {
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap ? "GCS" : "USDM"}
                        </Typography>
                        <Typography>Balance : {swap ? gcsBalance : usdmBalance}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button" onClick={()=>maxforgcsusdm()}> MAX</Typography>
                    </Box>

                    <MDBIcon
                      fas
                      icon="arrows-alt-v"
                      className="swap-icon"
                      onClick={() => setSwap(!swap)}
                    />
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap ? "USDM" : "GCS"}
                        </Typography>
                        <Typography>Balance : {swap ? usdmBalance : gcsBalance}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        disabled={true}
                        type="number"
                        value={swap ? (amount*gcsusdm) : (amount*(1/gcsusdm))}
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                    </Box>
                  </>
                }
                <Box className="swap">
                  <Typography className="swap-button" sx={{ margin: "auto" }} onClick={()=>Swap()}>
                    SWAP
                  </Typography>
                </Box>
              </MDBCardBody>
            </MDBCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6} xl={6}>
            <MDBCard className="my-5 mx-3">
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                >
                  SWAP
                </MDBCardTitle>
                <MDBCardSubTitle
                  className="text-center"
                  style={{
                    color: "#787373",
                    borderBottom: "1px solid #a5a0a0",
                  }}
                >
                  Trade tokens in an instant
                </MDBCardSubTitle>
                {
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap2 ? "USDM" : "XAUS"}
                        </Typography>
                        <Typography>Balance : {swap2 ? usdmBalance : xausbal}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        value={amount2}
                        onChange={(e)=>setAmount2(e.target.value)}
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button" onClick={()=>maxforgcsusdm2()}> MAX</Typography>
                    </Box>
                    <MDBIcon
                      fas
                      icon="arrows-alt-v"
                      className="swap-icon"
                      onClick={() => setSwap2(!swap2)}
                    />
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap2 ? "XAUS" : "USDM"}
                        </Typography>
                        <Typography>Balance : {swap2 ? xausbal : usdmBalance}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        disabled={true}
                        value={swap2 ? (amount2*(1/xaustousdm)) : (amount2*xaustousdm)}
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                    </Box>
                  </>
                }
                <Box className="swap">
                  <Typography className="swap-button" sx={{ margin: "auto" }} onClick={()=>Swap2()}>
                    SWAP
                  </Typography>
                </Box>
              </MDBCardBody>
            </MDBCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6} xl={6}>
            <MDBCard className="my-5 mx-3">
              <MDBCardBody>
                <MDBCardTitle
                  className="text-center"
                  style={{ fontWeight: "bold" }}
                >
                  SWAP
                </MDBCardTitle>
                <MDBCardSubTitle
                  className="text-center"
                  style={{
                    color: "#787373",
                    borderBottom: "1px solid #a5a0a0",
                  }}
                >
                  Trade tokens in an instant
                </MDBCardSubTitle>
                {
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap3 ? "XAUS" : "USDT"}
                        </Typography>
                        <Typography>Balance : {swap3 ? xausbal : usdtbal}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        value={amount3}
                        onChange={(e)=>setAmount3(e.target.value)}
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button" onClick={()=>maxforgcsusdm3()}> MAX</Typography>
                    </Box>
                    <MDBIcon
                      fas
                      icon="arrows-alt-v"
                      className="swap-icon"
                      onClick={() => setSwap3(!swap3)}
                    />
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          {swap3 ? "USDT" : "XAUS"}
                        </Typography>
                        <Typography>Balance : {swap3 ? usdtbal : xausbal}</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        disabled={true}
                        value={swap3 ? (amount3*(xaustousd)) : (amount3*(1/xaustousd))}
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                    </Box>
                  </>
                }
                <Box className="swap">
                  <Typography className="swap-button" sx={{ margin: "auto" }} onClick={()=>Swap3()}>
                    SWAP
                  </Typography>
                </Box>
              </MDBCardBody>
            </MDBCard>
          </Grid>
        </Grid>
        <Toaster />
      </Container>
    </>
  );
}
