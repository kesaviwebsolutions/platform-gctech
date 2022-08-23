import React,{useState, useEffect} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge,
  MDBInput,
  MDBIcon,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import toast, { Toaster } from 'react-hot-toast';
import { totalGCSfee, totalUSDMfee, totalUSDTfee, totalXAUSfee, totalGCSswap, totalUSDTswap, totalUSDMswap, totalXAUSswap, newAdmin, newFee } from "./../../Web3/Web3"

const notify = (msg) => toast(msg);


export default function Admin({account, contractadmin}) {
  
  const [usdmfee, setUsdmfee] = useState(0);
  const [xausfee, setXausfee] = useState(0);
  const [usdtfee, setUsdtfee] = useState(0);
  const [gcsfee, setGcsfee] = useState(0);
  const [usdmswap, setUsdmswap] = useState(0);
  const [xausswap, setXausswap] = useState(0);
  const [usdtswap, setUsdtswap] = useState(0);
  const [gcsswap, setGcsswap] = useState(0);
  const [fee, setFee] = useState(0);
  const [admin, setAdmin] = useState();
  const [user, setUser] = useState(false);

  useEffect(()=>{
    const init =async()=>{
      if(contractadmin == account){
        setUser(true)
      }
      const usdmf = await totalUSDMfee();
      const gcsf = await totalGCSfee();
      const usdtf = await totalUSDTfee();
      const xausf = await totalXAUSfee();
      const usdms = await totalUSDMswap();
      const usdts = await totalUSDTswap();
      const xauss = await totalXAUSswap();
      const gcss = await totalGCSswap();
      setGcsfee(gcsf);
      setUsdmfee(usdmf);
      setUsdtfee(usdtf);
      setXausfee(xausf);
      setUsdmswap(usdms);
      setUsdtswap(usdts);
      setXausswap(xauss);
      setGcsswap(gcss);
    }

    init();
  },[account])

  const setnewAdmin =async()=>{
    const data = await newAdmin(admin)
    if(data.status){
      notify("New admin set successfully")
    }
  }

  const setnewfee =async()=>{
    const data = await newFee(fee)
    if(data.status){
      notify("Fee has updated")
    }
  }

  return (
    <>
   { contractadmin == account ? <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", padding: "10px 20px" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total GCS Fee Collected</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {gcsfee}
                <MDBBadge color="success" className="mx-2">
                  {/* <MDBIcon fas icon="chart-line" /> 70.32% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total XAUS Fee Collected</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${Number(usdmmarketcap).toFixed(0)} */}
                {xausfee}
                <MDBBadge color="danger" className="mx-2">
                  {/* <MDBIcon fas icon="chart-line" /> 27.02% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total USDM Fee Collected</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${xausmk} */}
                {usdmfee}
                <MDBBadge color="danger" className="mx-2">
                  {/* <MDBIcon fas icon="chart-line" /> 9.00% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total USDT Fee Collected</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* {Number(1 / gcsusdm).toFixed(5)} */}
                {usdtfee}
                <MDBBadge color="success" className="mx-2">
                  {/* <MDBIcon fas icon="chart-line" /> 70.32% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", padding: "10px 20px" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total USDT Swap</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${xaustousd} */}
                {usdtswap}
                <MDBBadge color="success" className="mx-2">
                  {/* <BiLineChart size={20}/> 59.32% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total USDM Swap</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${usdmtousdt} */}
                {usdmswap}
                <MDBBadge color="success" className="mx-2">
                  {/* <BiLineChart size={20}/> 70.32% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total XAUS Swap</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${gcstousd} */}
                {xausswap}
                <MDBBadge color="danger" className="mx-2">
                  {/* <BiLineChartDown size={20}/> 27.02% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Total GCS Swap</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* {Number(xaustogcs).toFixed(5)} */}
                {gcsswap}
                <MDBBadge color="success" className="mx-2">
                  {/* <BiLineChart size={20}/> 70.32% */}
                </MDBBadge>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} xl={6}>
          <MDBCard className="my-5 mx-3">
            <MDBCardBody>
              <MDBCardTitle
                className="text-center"
                style={{ fontWeight: "bold" }}
              >
                SET NEW FEE
              </MDBCardTitle>
              <MDBCardSubTitle
                className="text-center"
                style={{
                  color: "#787373",
                  borderBottom: "1px solid #a5a0a0",
                }}
              >
              </MDBCardSubTitle>
              {
                <>
                  <Box className="position-relative">
                    <Box className="title-area"></Box>
                    <MDBInput
                      id="form1"
                      type="number"
                      onChange={(e)=> setFee(e.target.value)}
                      placeholder="0.0"
                      style={{ padding: "30px 20px" }}
                    />
                  </Box>
                </>
              }
              <Box className="swap">
                <Typography className="swap-button" sx={{ margin: "auto" }} onClick={()=>setnewfee()}>
                  SUBMIT
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
                SET NEW ADMIN
              </MDBCardTitle>
              <MDBCardSubTitle
                className="text-center"
                style={{
                  color: "#787373",
                  borderBottom: "1px solid #a5a0a0",
                }}
              >
              
              </MDBCardSubTitle>
              {
                <>
                  <Box className="position-relative">
                    <Box className="title-area"></Box>
                    <MDBInput
                      id="form1"
                      onChange={(e)=> setAdmin(e.target.value)}
                      type="text"
                      placeholder="address"
                      style={{ padding: "30px 20px" }}
                    />
                  </Box>
                </>
              }
              <Box className="swap">
                <Typography className="swap-button" sx={{ margin: "auto" }} onClick={()=>setnewAdmin()}>
                  SUBMIT
                </Typography>
              </Box>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </Grid>
      <Toaster />
    </Container>: ''}
    </>
  );
}
