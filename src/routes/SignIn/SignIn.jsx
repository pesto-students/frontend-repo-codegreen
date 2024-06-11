import React, { useRef } from "react";
import Button from "../../components/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import googleIcon from "../../assets/icons/google.svg";
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";

function SignIn() {
  const url = useCloudinaryImage("15256_atn3ju").url;
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    try {
      //Add logic to call sign-in endpoint and pass credentials

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={styles.bgImgDiv}
        style={{
          backgroundImage: `url('${url}')`,
        }}
      />
      <div className="w-full md:w-[80%] lg:w-[60%] bg-light-green p-[10%] lg:p-[5%] mt-[5%] md:mt-[10%] rounded-[40px] flex flex-col gap-5 relative z-2">
        <div>
          <p className="mb-5">
            Welcome to <span className="font-bold">GREENGROW</span>
          </p>
          <h1 className="text-3xl font-bold">Sign In</h1>

          <form className="mx-0 my-[5%] w-full space-y-4 flex flex-col items-end">
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
            <NavLink className='w-full flex flex-row justify-end'>
              <Button text="Sign in" isFullWidth onClick={handleSignIn} className="mt-8 md:w-[40%]"/>
            </NavLink>
            <p className="text-sm">Forgot password?</p>
            </form>
            <span className="m-0 block form-divider w-full" >or</span>
            <Button
              text="Sign in with Google"
              bgColor="beige"
              color="darkest-green"
              icon={googleIcon}
              className="gap-1 lg:w-[100%] "
            />
        </div>
        <div className="text-right">
          <p>Don't have an account?</p>
          <NavLink to="/sign-up" className='w-full flex flex-row justify-end'>
            <Button text="Register" bgColor="darkest-green" className="mt-8 md:w-[40%]"/>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SignIn;
