import React from "react";
import Button from "../../components/Button/Button";
import { TextField, InputLabelProps } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./SignIn.module.css";
import googleIcon from '../../assets/icons/google.svg'

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

         
          <NavLink>
            <Button text="Sign in" isFullWidth />
          </NavLink>
          <p>Forgot password?</p>
          <span className={styles.divider}>or</span>
          <Button text="Sign in with Google" bgColor="#EFE7D2" color="#36592F" isFullWidth icon={googleIcon}/>
        </form>
      </div>
      <div id={styles.registerDiv}>
        <p>Don't have an account?</p>
        <Button text="Register" bgColor="#36592F" />
      </div>
    </div>
  );
}

export default SignIn;
