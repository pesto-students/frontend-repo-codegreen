import React, { useRef } from "react";
import Button from "../../components/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import googleIcon from '../../assets/icons/google.svg'
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";

function SignIn() {

  const url = useCloudinaryImage('15256_atn3ju').url;
   const emailRef = useRef('');
   const passwordRef = useRef('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    try{
      //Add logic to call sign-in endpoint and pass credentials

      navigate('/dashboard');
    }
    catch(error){
      console.log(error)
    }
  }

  return (
   <>
     <div
      className={styles.bgImgDiv}
      style={{
        backgroundImage: `url('${url}')`,
      }}
    />
    <div className={styles.bgCard}>
   
      <div className={styles.mainContent}>
        <p className="">
          Welcome to <span >GREENGROW</span>
        </p>
        <h1>Sign In</h1>

        <form>
          {/* <TextField
            id="email"
            label="Enter your email address"
            variant="standard"
            required
            InputLabelProps={{ shrink: true}}
            InputProps={{ inputRef: emailRef }}
           
          />
          <TextField
            id="password"
            label="Enter your password"
            variant="standard"
            required
            type="password"
            InputLabelProps={{ shrink: true }}
            InputProps={{ inputRef: passwordRef }}
            
          /> */}

         
          <NavLink>
            <Button text="Sign in" isFullWidth onClick={handleSignIn}/>
          </NavLink>
          <p>Forgot password?</p>
          <span className={styles.divider}>or</span>
          <Button text="Sign in with Google" bgColor="#EFE7D2" color="#36592F" isFullWidth icon={googleIcon} />
        </form>
      </div>
      <div id={styles.registerDiv}>
        <p>Don't have an account?</p>
        <NavLink to='/sign-up'>

        <Button text="Register" bgColor="#36592F" />
        </NavLink>
      </div>
    </div>
  {/*   <div className={styles.bgImgDiv} style={{
      backgroundImage : `url('${bgImage}')`
    }}>
      <div className={styles.imgOverlay}></div>
    </div> */}
    </>
  );
}

export default SignIn;
