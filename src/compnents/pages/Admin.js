import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import toast, { Toaster } from "react-hot-toast";
import {
  totalGCSfee,
  totalUSDMfee,
  ContractTokenBal,
  WithdrawEth,
  totalUSDTfee,
  totalXAUSfee,
  totalGCSswap,
  totalUSDTswap,
  totalUSDMswap,
  totalXAUSswap,
  newAdmin,
  newFee,
  Withdrawtoken,
} from "./../../Web3/Web3";
import { Button } from "@material-ui/core";

const notify = (msg) => toast(msg);
const usdm = "0x08ab7e5c08cc0d78589fc506c35ea9c2520a86bc";
const gcs = "0x3d2bb1f7ab5d64c3917dbe03d37843421a42e0cd";
const xaus = "0x66d7ca7c5111f6544a06bbf2c430a1d070d02d27";
const usdt = "0x55d398326f99059fF775485246999027B3197955";

export default function Admin({ account, contractadmin }) {
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
  const [token, setToken] = useState();
  const [tokenamount, setTokenAmount] = useState();
  const [xausbal, setXausbal] = useState(0);
  const [gcsbal, setGcsbal] = useState(0);
  const [usdtbal, setUsdtbal] = useState(0);
  const [usdmbal, setUsdmbal] = useState(0);

  useEffect(() => {
    const init = async () => {
      if (contractadmin == account) {
        setUser(true);
      }
      const usdmf = await totalUSDMfee();
      const gcsf = await totalGCSfee();
      const usdtf = await totalUSDTfee();
      const xausf = await totalXAUSfee();
      const usdms = await totalUSDMswap();
      const usdts = await totalUSDTswap();
      const xauss = await totalXAUSswap();
      const gcss = await totalGCSswap();
      const xausbal = await ContractTokenBal(xaus);
      const gcsbal = await ContractTokenBal(gcs);
      const usdmbal = await ContractTokenBal(usdm);
      const usdtbal = await ContractTokenBal(usdt);
      setXausbal(xausbal);
      setGcsbal(gcsbal);
      setUsdmbal(usdmbal);
      setUsdtbal(usdtbal);
      setGcsfee(gcsf);
      setUsdmfee(usdmf);
      setUsdtfee(usdtf);
      setXausfee(xausf);
      setUsdmswap(usdms);
      setUsdtswap(usdts);
      setXausswap(xauss);
      setGcsswap(gcss);
    };

    init();
  }, [account]);

  const setnewAdmin = async () => {
    const data = await newAdmin(admin);
    if (data.status) {
      notify("New admin set successfully");
    }
  };

  const setnewfee = async () => {
    const data = await newFee(fee);
    if (data.status) {
      notify("Fee has updated");
    }
  };
  const reoverEth = async () => {
    const data = await WithdrawEth();
    if (data.status) {
      notify("Success");
    }
  };

  const reovertoken = async () => {
    const data = await Withdrawtoken(token, tokenamount);
    if (data.status) {
      notify("Success");
    }
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", padding: "10px 20px" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>GCS Fee Collected</MDBCardTitle>
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
                <MDBCardTitle>XAUS Fee Collected</MDBCardTitle>{" "}
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
                <MDBCardTitle>USDM Fee Collected</MDBCardTitle>
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
                <MDBCardTitle>USDT Fee Collected</MDBCardTitle>
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
                <MDBCardTitle>USDT Swapped</MDBCardTitle>{" "}
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
                <MDBCardTitle>USDM Swapped</MDBCardTitle>
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
                <MDBCardTitle>XAUS Swapped</MDBCardTitle>
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
                <MDBCardTitle>GCS Swapped</MDBCardTitle>{" "}
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

        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", padding: "10px 20px" }}
        >
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>USDT Balance</MDBCardTitle>{" "}
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  {/* ${xaustousd} */}
                  {usdtbal}
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
                <MDBCardTitle>USDM Balance</MDBCardTitle>
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  {/* ${usdmtousdt} */}
                  {usdmbal}
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
                <MDBCardTitle>XAUS Balance</MDBCardTitle>
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  {/* ${gcstousd} */}
                  {xausbal}
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
                <MDBCardTitle>GCS Balance</MDBCardTitle>{" "}
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  {/* {Number(xaustogcs).toFixed(5)} */}
                  {gcsbal}
                  <MDBBadge color="success" className="mx-2">
                    {/* <BiLineChart size={20}/> 70.32% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
        </Grid>

        {account == contractadmin ? (
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
                  ></MDBCardSubTitle>
                  {
                    <>
                      <Box className="position-relative">
                        <Box className="title-area"></Box>
                        <MDBInput
                          id="form1"
                          type="number"
                          onChange={(e) => setFee(e.target.value)}
                          placeholder="0.0"
                          style={{ padding: "30px 20px" }}
                        />
                      </Box>
                    </>
                  }
                  <Box className="swap">
                    <Typography
                      className="swap-button"
                      sx={{ margin: "auto" }}
                      onClick={() => setnewfee()}
                    >
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
                  ></MDBCardSubTitle>
                  {
                    <>
                      <Box className="position-relative">
                        <Box className="title-area"></Box>
                        <MDBInput
                          id="form1"
                          onChange={(e) => setAdmin(e.target.value)}
                          type="text"
                          placeholder="address"
                          style={{ padding: "30px 20px" }}
                        />
                      </Box>
                    </>
                  }
                  <Box className="swap">
                    <Typography
                      className="swap-button"
                      sx={{ margin: "auto" }}
                      onClick={() => setnewAdmin()}
                    >
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
                    RECOVER ASSETS
                  </MDBCardTitle>
                  <MDBCardSubTitle
                    className="text-center"
                    style={{
                      color: "#787373",
                      borderBottom: "1px solid #a5a0a0",
                    }}
                  ></MDBCardSubTitle>
                  {
                    <>
                      <Box className="position-relative">
                        <Box className="title-area"></Box>
                        <MDBInput
                          id="form1"
                          onChange={(e) => setToken(e.target.value)}
                          type="text"
                          placeholder="Token address"
                          style={{ padding: "30px 20px" }}
                        />
                      </Box>
                      <br />
                      <Box className="position-relative">
                        <Box className="title-area"></Box>
                        <MDBInput
                          id="form1"
                          onChange={(e) => setTokenAmount(e.target.value)}
                          type="number"
                          placeholder="Amount"
                          style={{ padding: "30px 20px" }}
                        />
                      </Box>
                    </>
                  }
                  <Box className="swap">
                    <Typography
                      className="swap-button"
                      sx={{ margin: "auto" }}
                      onClick={() => reovertoken()}
                    >
                      SUBMIT
                    </Typography>
                  </Box>
                  <Box className="swap">
                    <Typography
                      className="swap-button"
                      sx={{ margin: "auto" }}
                      onClick={() => reoverEth()}
                    >
                      RECOVER ONLY BNB
                    </Typography>
                  </Box>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
        <Toaster />
      </Container>
      :
      {/*.......................... ADMIN TABLE.................................. */}
      <Container maxWidth="lg">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Add level</th>
              <th scope="col">Name of the level</th>
              <th scope="col">Bonus of the percentage</th>
              <th scope="col">APY</th>
              <th scope="col">Level Name</th>
              <th scope="col">Level Bonus</th>
              <th scope="col">No. of referrals</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">John Doe</p>
                    <p className="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Software engineer</p>
                <p className="text-muted mb-0">IT department</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Active
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Consultant</p>
                <p className="text-muted mb-0">Finance</p>
              </td>
              <td>
                <MDBBadge color="primary" pill>
                  Onboarding
                </MDBBadge>
              </td>
              <td>Junior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kate Hunington</p>
                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Designer</p>
                <p className="text-muted mb-0">UI/UX</p>
              </td>
              <td>
                <MDBBadge color="warning" pill>
                  Awaiting
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
              <td>
                <MDBBadge color="warning" pill>
                  Awaiting
                </MDBBadge>
              </td>
              <td>
                <MDBBadge color="warning" pill>
                  Awaiting
                </MDBBadge>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
        <Button
          variant="contained"
          style={{
            display: "block",
            margin: " 20px auto",
            width: "100%",
            background: "#F144EC",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Pay Bonus
        </Button>
      </Container>
    </>
  );
}
