import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Grid } from "@mui/material";
import { MDBBadge } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { Container } from "@mui/system";

export default function Main({gcsmaketcap, gcstousd, gcsusdm, xaustousd,xausmk, usdmtousdt, usdmmarketcap, xaustogcs, xaustousdm}) {
  return (
    <>
      <Container maxWidth="lg" minwidth="md">
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "20px", padding: "10px 20px" }}
        >
   
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  ${gcsmaketcap}
                  <MDBBadge color="success" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 70.32% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  ${usdmmarketcap}
                  <MDBBadge color="danger" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 27.02% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  ${xausmk}
                  <MDBBadge color="danger" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 9.00% */}
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
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  $4,42,236
                  <MDBBadge color="success" className="mx-2">
                    <MDBIcon fas icon="chart-line" /> 59.32%
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  $78,250
                  <MDBBadge color="success" className="mx-2">
                    <MDBIcon fas icon="chart-line" /> 70.32%
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
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
                  $35,078
                  <MDBBadge color="danger" className="mx-2">
                    <MDBIcon fas icon="chart-line" /> 27.02%
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
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>GCS TO USDM</MDBCardTitle>{" "}
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  $4,42,236
                  <MDBBadge color="success" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 59.32% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>GSC TO XAUS</MDBCardTitle>{" "}
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  $78,250
                  <MDBBadge color="success" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 70.32% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={4}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>USDM TO XAUS</MDBCardTitle>
                <h4
                  style={{
                    fontWeight: " 500",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  $35,078
                  <MDBBadge color="danger" className="mx-2">
                    {/* <MDBIcon fas icon="chart-line" /> 27.02% */}
                  </MDBBadge>
                </h4>
              </MDBCardBody>
            </MDBCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
