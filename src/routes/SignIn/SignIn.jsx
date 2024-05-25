import React from "react";
import Button from "../../components/Button/Button";
import { TextField, InputLabelProps } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.bgCard}>
   
      <div className={styles.mainContent}>
        <p>
          Welcome to <span >GREENGROW</span>
        </p>
        <h1>Sign In</h1>

        <form>
          <TextField
            id="standard-basic"
            label="Enter your email address"
            variant="standard"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="standard-basic"
            label="Enter your password"
            variant="standard"
            required
            type="password"
            InputLabelProps={{ shrink: true }}
          />

          <span>Forgot password?</span>
          <NavLink>
            <Button text="Sign in" />
          </NavLink>

          <span>or</span>
          <Button text="Sign in with Google" color="#EFE7D2" />
        </form>
      </div>
      <div className={styles.sideContent}>
        <p>Don't have an account?</p>
        <Button text="Register" bgColor="#36592F" size="small" />
      </div>
    </div>
  );
}

export default SignIn;
