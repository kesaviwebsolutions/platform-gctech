import React from "react";
import {MDBContainer} from "mdb-react-ui-kit";
import { Box, Link, Typography } from "@mui/material";
import { MDBIcon } from "mdb-react-ui-kit";


export default function Footer() {
  return (
    <>
      <MDBContainer fluid>
        <Box className="footer-area">
          <Typography variant="h6" style={{border:"1px solid #F144EC", width:"100px", background:"#F144EC", color:"#fff", textAlign:"center", margin:"20px 0px"}}><Link to="/">AUDIT</Link></Typography>
          <Typography variant="h6" className="mx-5" style={{border:"1px solid #00C851", width:"100px", background:"#00C851", color:"#fff", textAlign:"center",margin:"20px 0px"}}><Link to="/">KYC</Link></Typography>
        </Box>
        <Box>
            <Typography paragraph  className="text-center">
            <MDBIcon fas icon="copyright"/> By Platform-Gctech
            </Typography>
            <Typography  paragraph  className="text-center my-2">Designed & Developed BY KWS</Typography>
        </Box>
      </MDBContainer>
    </>
  );
}
