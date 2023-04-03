import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";
import { TextField } from "@mui/material";

function Header() {
  const [searchValue, setsearchValue] = useState("");
  return (
    <AppBar
      position="static"
      sx={{
        background: "#ffffff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src="Full Logo Original 1920px 3.png" alt="logo" />

          <div style={{ display: "flex", marginLeft: "-28rem" }}>
            <TextField
              type={"search"}
              id="mysearch"
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
              label="Search in course"
              placeholder="Search in course"
              size="small"
              style={{ width: "22rem" }}
            ></TextField>
            <Button
              variant="contained"
              style={{
                background: "#0093fb",
                marginLeft: "-1rem",
                height: "2.46rem",
              }}
            >
              Search
            </Button>
          </div>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings"> */}
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="Group 310.png" />
            </IconButton>
            {/* </Tooltip> */}
            <a
              style={{
                textDecoration: "none",
                marginLeft: "1rem",
                marginRight: "1rem",
                fontWeight: "600",
                fontSize: "16px",
                color: "#0093fb",
              }}
              href="http://localhost:3000/login"
            >
              Logout
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
