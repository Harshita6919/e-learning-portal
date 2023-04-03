import React from "react";
import { Grid, Link, TextField, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import { width } from "@mui/system";

const signUp = () => {
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
            style={{
              color: "white",
              marginTop: "-2.2rem",
              marginLeft: "1rem",
              textDecoration: "underline",
              fontWeight: "bolder",
            }}
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
        <img
          src="Full Logo Original 1920px 3.png"
          alt="logo"
          style={styles.logo}
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
    </Grid>
  );
};

export default signUp;

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

  logo: {
    marginLeft: "14rem",
    marginTop: "1rem",
  },

  welcomeText: {
    color: "white",
    marginTop: "-1rem",
    marginLeft: "4rem",
  },

  inputsBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },

  inputs1: {
    color: "white",
    width: "19rem",
    margin: "auto",
  },

  inputs2: {
    width: "19rem",
    margin: "auto",
    marginTop: "1rem",
  },

  button: {
    border: "2px solid white",
    width: "19rem",
    margin: "auto",
    color: "white",
    marginLeft: "4.5rem",
    marginTop: "2rem",
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

  "@media (min-width: 414px) and (max-width: 896px)": {
    imageDiv: {
      display: "none",
    },
  },
};
