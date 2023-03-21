import React from "react";
import { Checkbox, Grid, Link, TextField, Typography } from "@mui/material";

import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Grid
      container
      xs={12}
      sm={12}
      md={12}
      lg={8}
      xl={8}
      spacing={0}
      style={styles.centerCard}
    >
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={styles.imageDiv}>
        <img src="Full Logo Original 1920px 3.png" alt="logo" />
        <img style={styles.image} src="Group 1.png" alt="image" />
        <Typography variant="h5" style={{ color: "#0093fb" }}>
          <h5>Credit Risk Management Program</h5>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={styles.loginDiv}>
        <Typography variant="h4" style={styles.welcomeText}>
          <h4>Welcome!</h4>
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          <h6>Don't have a account yet? </h6>
        </Typography>
        <Link style={{ color: "white" }} href="#">
          Sign Up
        </Link>
        <div style={styles.inputsBox}>
          <TextField id="username" label="User Name" style={styles.inputs1} />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            style={styles.inputs2}
          />
        </div>

        <div style={styles.checkStat}>
          <div style={styles.checkBox}>
            <Checkbox size="small" style={{ color: "white" }} />
            <p style={{ color: "white" }}>Keep me logged in</p>
          </div>
          <Link style={{ color: "white", marginTop: "0.7rem" }} href="#">
            Forgot Password
          </Link>
        </div>

        <Button variant="outlined" style={styles.inputs3}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;

const styles = {
  centerCard: {
    margin: "auto",
    marginTop: "3rem",
  },

  imageDiv: {
    background: "F5F5F5",
  },

  image: {
    margin: "3rem",
    marginTop: "3rem",
    height: "20rem",
    width: "20rem",
  },

  loginDiv: {
    background: "#0093fb",
  },

  welcomeText: {
    color: "white",
    margin: "auto",
    marginLeft: "4rem",
  },

  inputsBox: {
    display: "flex",
    flexDirection: "column",
  },

  inputs1: {
    border: "1px solid white",
    width: "19rem",
    margin: "auto",
    borderRadius: "1rem",
  },

  inputs2: {
    border: "1px solid white",
    width: "19rem",
    margin: "auto",
    borderRadius: "1rem",
    marginTop: "2rem",
  },

  inputs3: {
    border: "2px solid white",
    width: "19rem",
    margin: "auto",
    color: "white",
    marginLeft: "5rem",
  },

  checkStat: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
    justifyContent: "space-around",
  },

  checkBox: {
    display: "flex !important",
  },
};
