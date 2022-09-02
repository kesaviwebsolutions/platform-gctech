import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function CreateLevel() {
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Container>
    </div>
  );
}
