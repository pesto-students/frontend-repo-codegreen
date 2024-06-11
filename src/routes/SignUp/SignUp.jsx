import React from "react";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import styles from "../SignIn/SignIn.module.css";
import googleIcon from "../../assets/icons/google.svg";
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";

function SignUp() {
  const url = useCloudinaryImage("15256_atn3ju").url;

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
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <form className="mx-0 my-[5%] w-full space-y-4 flex flex-col items-end">
            <label htmlFor="f-name" className="block w-full">
              Enter your first name
              <input
                id="f-name"
                type="text"
                className="form-input input-style"
              />
            </label>
            <label htmlFor="l-name" className="block w-full">
              Enter your last name
              <input
                id="l-name"
                type="text"
                className="form-input input-style"
              />
            </label>
            <label htmlFor="email" className="block w-full">
              Enter your e-mail address
              <input
                id="email"
                type="email"
                className="form-input input-style"
              />
            </label>
            <label htmlFor="password" className="block w-full">
              Enter your password
              <input
                id="password"
                type="password"
                className="form-input input-style"
              />
            </label>
            <NavLink className="w-full flex flex-row justify-end">
              <Button text="Register" className="mt-8 md:w-[40%]" />
            </NavLink>
          </form>
          <span className="m-0 block form-divider w-full">or</span>
          <Button
            text="Sign up with Google"
            bgColor="beige"
            color="darkest-green"
            icon={googleIcon}
            className="gap-1 lg:w-[100%] "
          />
        </div>
        <div className="text-right">
          <p className="text-sm">Already have an account?</p>
          <NavLink to="/sign-in" className='w-full flex flex-row justify-end'>
            <Button text="Sign in" className="mt-8 md:w-[40%]"/>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default SignUp;
