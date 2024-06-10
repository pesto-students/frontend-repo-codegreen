import React from "react";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import styles from "../SignIn/SignIn.module.css";
import googleIcon from '../../assets/icons/google.svg';
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";

function SignUp() {
  const url = useCloudinaryImage('15256_atn3ju').url;
  
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
         <p>
           Welcome to <span >GREENGROW</span>
         </p>
         <h1>Sign Up</h1>
 {/* 
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: { xs: '100%', sm: '45%' }, },
      }}
      noValidate
      
    > */}
         {/* <TextField
             id="standard-basic"
             label="Enter your first name"
             variant="standard"
             required
             InputLabelProps={{ shrink: true }}
           />
            <TextField
             id="standard-basic"
             label="Enter your last name"
             variant="standard"
             required
             InputLabelProps={{ shrink: true }}
           />
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
  */}
          
           <NavLink>
             <Button text="Register" isFullWidth />
           </NavLink>
          
           <span className={styles.divider}>or</span>
           <Button text="Sign up with Google" bgColor="#EFE7D2" color="#36592F" isFullWidth icon={googleIcon}/>
        {/*  </Box> */}
       </div>
       <div id={styles.registerDiv}>
         <p>Already have an account?</p>
         <NavLink to='/sign-in'>
 
         <Button text="Sign in" bgColor="#36592F" />
         </NavLink>
       </div>
     </div>
   
     </>
   );
  }
export default SignUp