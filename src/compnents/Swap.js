
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
import { getTokenBalancegcs, getTokenBalanceusdm, SwapToken, SwapToken2 } from "../Web3/Web3";


const notify = () => toast('Swap Success');

const usdm = "0x24D5d3e32be29bFA889aF6fd370311633257eD64"
const gcs = "0x84cae20b42be7f0c580f7b0a7e8663fd4bea7d81"
const xaus = "0x84cae20b42be7f0c580f7b0a7e8663fd4bea7d81"

export default function Swap({gcsusdm, xaustousdm}) {
  const [swap, setSwap] = useState(true);
  const [swap2, setSwap2] = useState(true);
  const [gcsBalance, setGcsBalance] = useState(0);
  const [usdmBalance, setUsdmBalance] = useState(0);
  const [amount, setAmount] = useState(0)
  const [amount2, setAmount2] = useState(0)
  const [xausbal, setXausbalance] = useState(0)

  useEffect(()=>{
    const init = async()=>{
      const gcsbal = await getTokenBalancegcs(gcs);
      setGcsBalance(gcsbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
      const xausbal = await getTokenBalancegcs(xaus);
      setXausbalance(xausbal)
    }
    init();
  },[])

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
    const data = await SwapToken2(swap,amount2,xaustousdm,usdm,xaus);
    if(data.status){
      notify();
      const xausbal = await getTokenBalancegcs(xaus);
      setXausbalance(xausbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
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
        </Grid>
        <Toaster />
      </Container>
    </>
  );
}
