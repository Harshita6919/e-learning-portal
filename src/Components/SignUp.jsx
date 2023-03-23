import React from "react";
import { Grid, Link, TextField, Typography } from "@mui/material";

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
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={styles.loginDiv}>
        <img
          src="Full Logo Original 1920px 3.png"
          alt="logo"
          style={styles.logo}
        />
        <Typography variant="h4" style={styles.welcomeText}>
          <h4>Welcome!</h4>
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="h6"
            style={{ color: "white", marginTop: "-4rem", marginLeft: "4rem" }}
          >
            <h6>Create new account </h6>
          </Typography>
          <Link
            style={{ color: "white", marginTop: "-2rem", marginLeft: "1rem" }}
            href="http://localhost:3000/login"
          >
            Sign In
          </Link>
        </div>

        <div style={styles.inputsBox}>
          <TextField id="email" label="Email" style={styles.inputs1} />
          <TextField id="username" label="User Name" style={styles.inputs2} />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            style={styles.inputs2}
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            style={styles.inputs2}
          />
        </div>

        <Button
          variant="outlined"
          style={styles.button}
          href="http://localhost:3000/dasboard"
        >
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={styles.imageDiv}>
        <img style={styles.image} src="Group 1.png" alt="image" />
        <Typography variant="h5" style={{ color: "#0093fb" }}>
          <h5 style={{ marginLeft: "4rem" }}>Credit Risk Management Program</h5>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;

const styles = {
  centerCard: {
    margin: "auto",
    marginTop: "3rem",
    marginBottom: "3rem",
  },

  imageDiv: {
    background: "F5F5F5",
    height: "43rem",
  },

  image: {
    margin: "3rem",
    marginTop: "3rem",
    height: "20rem",
    width: "20rem",
    marginTop: "8rem",
  },

  loginDiv: {
    background: "#0093fb",
    height: "43rem",
  },

  logo: {
    marginLeft: "1rem",
    marginTop: "1rem",
  },

  welcomeText: {
    color: "white",
    margin: "auto",
    marginLeft: "4rem",
  },

  inputsBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2rem",
  },

  inputs1: {
    color: "white",
    width: "19rem",
    margin: "auto",
  },

  inputs2: {
    width: "19rem",
    margin: "auto",
    marginTop: "2rem",
  },

  button: {
    border: "2px solid white",
    width: "19rem",
    margin: "auto",
    color: "white",
    marginLeft: "5rem",
    marginTop: "2.5rem",
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
