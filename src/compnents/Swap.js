import React, { useState } from "react";
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

export default function Swap() {
  const [swap, setSwap] = useState(false);
  const [swap2, setSwap2] = useState(false);
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
                {swap ? (
                  <>
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          GCS
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
                      onClick={() => setSwap(!swap)}
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
                      onClick={() => setSwap(!swap)}
                    />
                    <Box className="position-relative">
                      <Box className="title-area">
                        <Typography
                          sx={{ margin: "10px 0px", fontWeight: "500" }}
                        >
                          GCS
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
      </Container>
    </>
  );
}
