import React from "react";
import "./signUp.css";

// Import for using react-hook-form
import { useForm } from "react-hook-form";

function SignUp(props) {
  // Extracting stuffs from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    console.log(value);
    sessionStorage.setItem("user", JSON.stringify(value));
    console.log(sessionStorage.getItem("user"));

    props.handleToggle();
  };
  return (
    <div className="signUpContainer container">
      <div className="heading">
        <h3>SignUp Page</h3>
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
              <label className="errorDisplay">{errors?.email?.message}</label>
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
                  minLength: { value: 8, message: "Minimum 8 characters" },
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
        <div className="signUpBtnContainer">
          <input type="submit" value="Sign Up" />
          <small>
            Already have an account?{" "}
            <span className="route" onClick={props.handleToggle}>
              sign in
            </span>
          </small>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
