import React from "react";
import Button from "../../components/Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../SignIn/SignIn.module.css";
import googleIcon from "../../assets/icons/google.svg";
import { useCloudinaryImage } from "../../hooks/useCloudinaryImage";
import { useUser } from '../../store/UserContext'; 
import axios from "../../hooks/axiosConfig";

function SignUp() {
  const url = useCloudinaryImage("15256_atn3ju").url;
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);
  const { setUser } = useUser();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userDetails = Object.fromEntries(formData.entries());
    try {
        const response = await axios.post("api/user/signUp", userDetails);
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } catch (error) {
        setError(error.response.data.message);        
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
      <div className="w-full lg:w-[60%] bg-light-green p-[10%] lg:p-[5%] mt-[5%] rounded-[40px] flex flex-col gap-5 relative z-2">
        <div>
          <p className="mb-5">
            Welcome to <span className="font-bold">GREENGROW</span>
          </p>
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <form className="mx-0 my-[5%] w-full space-y-6 flex flex-col md:flex-row md:flex-wrap md:gap-3 items-end md:justify-between" onSubmit={e => handleSignUp(e)}>
            <label htmlFor="f-name" className="block w-full md:w-[45%]">
              First Name
              <input
                id="f-name"
                type="text"
                name="firstName"
                className="form-input input-style"
                required
              />
            </label>
            <label htmlFor="l-name" className="block w-full md:w-[45%]">
              Last Name
              <input
                id="l-name"
                type="text"
                name="lastName"
                className="form-input input-style"
                required
              />
            </label>
            <label htmlFor="email" className="block w-full md:w-[45%]">
              E-mail address
              <input
                id="email"
                type="email"
                name="email"
                className="form-input input-style"
                required
              />
            </label>
            <label htmlFor="password" className="block w-full md:w-[45%]">
              Password
              <input
                id="password"
                type="password"
                name="password"
                className="form-input input-style"
                required
              />
            </label>
            {
              error && <p className="text-red font-semibold text-sm w-full">{error}</p>
            }
              <Button text="Register" type="submit" />
           
          </form>
          {/* <span className="m-0 block form-divider w-full">or</span>
          <Button
            text="Sign up with Google"
            bgColor="beige"
            color="darkest-green"
            icon={googleIcon}
            className="gap-1 lg:w-[100%] "
            
          /> */}
        </div>
        <div className="text-right">
          <p className="text-sm">Already have an account?</p>
          <NavLink to="/sign-in" className='w-full flex flex-row justify-end'>
            <Button text="Sign in" className="mt-8 md:w-[40%]" bgColor="darkest-green"/>
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default SignUp;
