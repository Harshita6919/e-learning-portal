import React from "react";
import { Checkbox, Grid, Link, TextField, Typography } from "@mui/material";
import "./../App.css";
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
        <img
          style={{ marginLeft: "1rem", marginTop: "1rem" }}
          src="Full Logo Original 1920px 3.png"
          alt="logo"
        />
        <img style={styles.image} src="g8.png" alt="image" />
        <Typography
          variant="h6"
          style={{
            color: "#043152",
            marginLeft: "4rem",
            marginTop: "0rem",
            fontWeight: "600",
          }}
        >
          Credit Risk Management Program
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} style={styles.loginDiv}>
        <Typography variant="h4" style={styles.welcomeText}>
          <h4>Welcome!</h4>
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="h6"
            style={{
              color: "white",
              marginTop: "-4rem",
              marginLeft: "4rem",
            }}
          >
            <h6>Don't have a account yet? </h6>
          </Typography>
          <Link
            style={{
              color: "white",
              marginTop: "-2.2rem",
              marginLeft: "1rem",
              textDecoration: "underline",
              fontWeight: "bolder",
            }}
            href="http://localhost:3000/signUp"
          >
            Sign Up
          </Link>
        </div>

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
            <p
              style={{ color: "white", marginTop: "-2rem", marginLeft: "2rem" }}
            >
              Keep me logged in
            </p>
          </div>
          <Link style={{ color: "white", marginTop: "0.5rem" }} href="#">
            Forgot Password
          </Link>
        </div>

        <Button
          variant="outlined"
          style={styles.button}
          href="http://localhost:3000/dasboard"
        >
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
    marginBottom: "2rem",
    height: "35rem",
  },

  imageDiv: {
    background: "#D7EDFD",
  },

  image: {
    height: "18rem",
    width: "26rem",
    marginTop: "3rem",
    marginLeft: "1rem",
  },

  loginDiv: {
    background: "linear-gradient(#0093FF, #043152)",
  },

  welcomeText: {
    color: "white",
    margin: "auto",
    marginLeft: "4rem",
  },

  label: {
    color: "white",
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
    marginLeft: "4.5rem",
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
