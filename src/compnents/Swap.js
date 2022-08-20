import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function Swap() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <MDBCard>
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
                <Box className>
                  <MDBInput
                    id="form1"
                    type="number"
                    placeholder="0.0"
                    style={{ padding: "30px 20px" }}
                  />
                  <MDBBtn outline color="success">
                    MAX
                  </MDBBtn>
                </Box>
              </MDBCardBody>
            </MDBCard>
          </Grid>

          <Grid item xs={12} sm={12} md={6} xl={6}>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle className="text-center">SWAP</MDBCardTitle>
                <MDBCardSubTitle
                  className="text-center"
                  style={{
                    color: "#787373",
                    borderBottom: "1px solid #a5a0a0",
                  }}
                >
                  Trade tokens in an instant
                </MDBCardSubTitle>
              </MDBCardBody>
            </MDBCard>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
