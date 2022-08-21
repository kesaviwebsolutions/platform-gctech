
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
import { getTokenBalancegcs, getTokenBalanceusdm, SwapToken } from "../Web3/Web3";


const notify = () => toast('Here is your toast.');

const usdm = "0x24D5d3e32be29bFA889aF6fd370311633257eD64"
const gcs = "0xBfC6a81C216f3B80b1AdEBBaa439374Dc9a460bd"

export default function Swap({gcsusdm}) {
  const [swap, setSwap] = useState(true);
  const [swap2, setSwap2] = useState(false);
  const [gcsBalance, setGcsBalance] = useState(0);
  const [usdmBalance, setUsdmBalance] = useState(0);
  const [amount, setAmount] = useState(0)

  useEffect(()=>{
    const init = async()=>{
      const gcsbal = await getTokenBalancegcs(gcs);
      setGcsBalance(gcsbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
    }
    init();
  },[])

  const Swap = async()=>{
    const data = await SwapToken(swap,amount,gcsusdm);
    if(data.status){
      notify()
      const gcsbal = await getTokenBalancegcs(gcs);
      setGcsBalance(gcsbal)
      const usdmbal = await getTokenBalanceusdm(usdm);
      setUsdmBalance(usdmbal);
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
                        onChange={(e)=>setAmount(e.target.value)}
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button"> MAX</Typography>
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
                  <Typography className="swap-button" sx={{ margin: "auto" }}>
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
                {swap2 ? (
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          XAUS
                        </Typography>
                        <Typography>Balance : 0</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button"> MAX</Typography>
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
                          USDM
                        </Typography>
                        <Typography>Balance : 0</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          USDM
                        </Typography>
                        <Typography>Balance : 0</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                      <Typography className="max-button"> MAX</Typography>
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
                          XAUS
                        </Typography>
                        <Typography>Balance : 0</Typography>
                      </Box>
                      <MDBInput
                        id="form1"
                        type="number"
                        placeholder="0.0"
                        style={{ padding: "30px 20px" }}
                      />
                    </Box>
                  </>
                )}
                <Box className="swap">
                  <Typography className="swap-button" sx={{ margin: "auto" }}>
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
