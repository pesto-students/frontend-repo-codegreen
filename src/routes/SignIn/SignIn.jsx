import React, { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import googleIcon from "../../assets/icons/google.svg";
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";
import { useUser } from '../../store/UserContext'; 
import axios from "../../hooks/axiosConfig";


function SignIn() {
  const url = useCloudinaryImage("15256_atn3ju").url;
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignIn = async (e) => {   
      e.preventDefault();
      try {
          const response = await axios.post("api/user/signIn", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          });
          const data = response.data;
          setUser(data.user);
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        } catch (error) {
          setError(error.message);
          emailRef.current.value = "";
          passwordRef.current.value = "";
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
      <div className="w-full md:w-[80%] lg:w-[60%] bg-light-green p-[10%] lg:p-[5%] mt-[5%] rounded-[40px] flex flex-col gap-5 relative z-2">
        <div>
          <p className="mb-5">
            Welcome to <span className="font-bold">GREENGROW</span>
          </p>
          <h1 className="text-3xl font-bold">Sign In</h1>

          <form className="mx-0 my-[5%] w-full space-y-6 flex flex-col items-end" onSubmit={e => handleSignIn(e)}>
            <label htmlFor="email" className="block w-full">
              Enter your e-mail address
              <input
                id="email"
                type="email"
                className="form-input input-style"
                ref={emailRef}
              />
            </label>
            <label htmlFor="password" className="block w-full">
              Enter your password
              <input
                id="password"
                type="password"
                className="form-input input-style"
                ref={passwordRef}
              />
            </label>
            {
              error && <p className="text-red font-semibold text-sm w-full">{error}</p>
            }
            
              <Button
                text="Sign in"
                isFullWidth
                type="submit"
               />
           
            <p className="text-sm">Forgot password?</p>
          </form>
          {/* <span className="m-0 block form-divider w-full">or</span>
          <Button
            text="Sign in with Google"
            bgColor="beige"
            color="darkest-green"
            icon={googleIcon}
            className="gap-1 lg:w-[100%] "
          /> */}
        </div>
        <div className="text-right">
          <p>Don't have an account?</p>
          <Link to="/sign-up" className="w-full flex flex-row justify-end">
            <Button
              text="Register"
              bgColor="darkest-green"
              className="mt-8 md:w-[40%]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
