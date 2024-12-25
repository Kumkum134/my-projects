import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from './image/logo.png';
import "./Signup-login.css";

const SSignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required")
      .matches(/^[a-zA-Z]+[0-9]*@gmail\.com$/, "Email is not valid."),
    password: Yup.string().min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password is not valid."),
  });

  const onSubmit = (values) => {
    console.log(values);
    navigate("/SLogin");
  };

  return (
    <div className="SignUps">
      <img src={logo} alt="logo" className="logos1" />
      <div className="signups">
        <h2>Sign Up</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-controls">
              <label htmlFor="username">Username</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="errors" />
            </div>

            <div className="form-controls">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="errors" />
            </div>

            <div className="form-controls">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="errors" />
            </div>

            <button type="submit">Sign Up</button>
            <h3>Haven't made an account? <Link to={"/SLogin"}>Login</Link></h3>
          </Form>
        </Formik>
      </div>
      <Outlet />
    </div>
  );
};
export const SLogin = () => {
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
    navigate("/SHome");
  };

  return (
    <div className="Logins2">
      <img src={logo} alt="logo" className="logos22" />
      <div className="logins2">
        <h2>Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-controls2">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="errors2" />
            </div>

            <div className="form-controls2">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="errors2" />
            </div>

            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default SSignUp;
