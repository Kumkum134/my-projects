import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from './image/logo.png';
import "./Signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = { username: "", email: "", password: "" };
  
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required")
      .matches(/^[a-zA-Z]+[0-9]*@gmail\.com$/, "Email is not valid."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password is not valid."),
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/login");
  };

  return (
    <div className="SignUp">
      <img src={logo} alt="logo" className="logo3" />
      <div className="signup">
        <h2>Sign Up</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit">Sign Up</button>
            <h3>Haven't made an account? <Link to={"/login"}>Login</Link></h3>
          </Form>
        </Formik>
      </div>
      <Outlet />
    </div>
  );
};
export default SignUp;

export const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required")
      .matches(/^[a-zA-Z]+[0-9]*@gmail\.com$/, "Email is not valid."),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/Home");
  };

  return (
    <div className="Login">
      <img src={logo} alt="logo" className="logo2" />
      <div className="login">
        <h2>Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-control2">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-control2">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
