import React from "react";
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

export default function Admin() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", padding: "10px 20px" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>GSC Market Cap</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                $42
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
              <MDBCardTitle>USDM Market Cap</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${Number(usdmmarketcap).toFixed(0)} */}
                $45
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
              <MDBCardTitle>XAUS Market Cap</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${xausmk} */}
                $90
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
              <MDBCardTitle>USDM TO GCS</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* {Number(1 / gcsusdm).toFixed(5)} */}
                $99
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
              <MDBCardTitle>XAUS TO USD</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${xaustousd} */}
                $100
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
              <MDBCardTitle>USDM TO USD</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${usdmtousdt} */}
                $200
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
              <MDBCardTitle>GSC TO USD</MDBCardTitle>
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* ${gcstousd} */}
                $200
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
              <MDBCardTitle>XAUS TO GCS</MDBCardTitle>{" "}
              <h4
                style={{
                  fontWeight: " 500",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                {/* {Number(xaustogcs).toFixed(5)} */}
                $300
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
                    <Box className="title-area"></Box>
                    <MDBInput
                      id="form1"
                      type="number"
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
              {
                <>
                  <Box className="position-relative">
                    <Box className="title-area"></Box>
                    <MDBInput
                      id="form1"
                      type="number"
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
      </Grid>
    </Container>
  );
}
