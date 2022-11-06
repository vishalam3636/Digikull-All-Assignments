import React from "react";
import "./signIn.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// Import for using react-hook-form
import { useForm } from "react-hook-form";
import SignUp from "../signUp/SignUp";

function Registration() {
  //==== state used to display/hide signIn and signup page ====//
  const [display, setDisplay] = useState(true);

  //===== function that will be ctoggling between signIn and signUp ====//
  const changeDisplayValFunc = () => {
    setDisplay(!display);
  };

  //===== Extracting stuffs from react-hook-form ====//
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //==== function for signIn ====//
  const history = useHistory();

  const onSubmit = (value) => {
    setDisplay(true);
    console.log(sessionStorage.getItem("user"));
    console.log(value.email, value.password, "signed in input data");

    let userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(userData, "userData");

    if (
      value.email === userData.email &&
      value.password === userData.password
    ) {
      history.push("/home");
    } else {
      alert("No user found... try loggin in again!!");
      history.push("/");
    }
  };

  return (
    <div>
      {display ? (
        <div className="signInContainer container">
          <div className="heading">
            <h3>SignIn Page</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*==== EMAIL CONTAINER =====*/}
            <div className="fieldContainer">
              <div className="labelContainer">
                <label>Email:</label>
              </div>
              <div className="inputAndErrorContainer">
                <div className="inputContainer">
                  <input
                    type="text"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email required....",
                      },
                    })}
                  />
                </div>
                <div className="errorContainer">
                  <label className="errorDisplay">
                    {errors?.email?.message}
                  </label>
                </div>
              </div>
            </div>

            {/*==== PASSWORD CONTAINER =====*/}
            <div className="fieldContainer">
              <div className="labelContainer">
                <label>Password:</label>
              </div>
              <div className="inputAndErrorContainer">
                <div className="inputContainer">
                  <input
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password required....",
                      },
                    })}
                  />
                </div>
                <div className="errorContainer">
                  <label className="errorDisplay">
                    {errors?.password?.message}
                  </label>
                </div>
              </div>
            </div>

            {/*====== LOGIN BUTTON =====*/}
            <div className="loginBtnContainer">
              <input type="submit" value="LogIn" />
              <small>
                Don't have an account?{" "}
                <span className="route" onClick={changeDisplayValFunc}>
                  New User??
                </span>
              </small>
            </div>
          </form>
        </div>
      ) : (
        <SignUp handleToggle={changeDisplayValFunc} />
      )}
    </div>
  );
}

export default Registration;
