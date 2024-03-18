'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';

import Image from "next/image";

import "../css/login.css";

export default function Login() {
  return (
    <main>
      <div id="loginPage">
        <div className="h-100">

          <div className="h-100 col-md-4 bg-white d-flex align-items-center justify-content-center">
            <div className="login-inner">

            <Image
          className="login-logo"
          src="/logo.png"
          alt="Logo"
          width={154}
          height={89}
          priority
        />

        <p className="login-welcome">Welcome to Login</p>

        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>

<div className="mb-3">
  <div className="login-input-wrap">
    <label className="form-label" htmlFor="loginEmail">Email</label>
    <Field type="email" name="loginEmail" id="loginEmail" placeholder="Enter Email" className="form-control" onChange={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
  </div>

  {errors.email && touched.email && <small className="text-muted form-text">{errors.email}</small>}
</div>

<div className="mb-3">
  <div className="login-input-wrap">
    <label className="form-label" htmlFor="loginPassword">Password</label>
    <Field type="password" name="loginPassword" id="loginPassword" placeholder="Enter Password" className="form-control" onChange={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
  </div>
</div>

<Button variant="primary" type="submit" disabled={isSubmitting}>Log In</Button>

         </Form>
       )}
     </Formik>
        
            </div>
          </div>


          <div className="col-md-8"></div>

        </div>
      </div>
    </main>
  );
}
