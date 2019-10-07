import React from 'react'
import {Formik} from 'formik'
import withStyle from 'react-jss'
import { FormStyle } from './Form.Style'

const LoginForm = ({classes}) => {
    return(
        <React.Fragment>
        <h1>Register Here</h1>
        <Formik
          initialValues={{firstName:'', lastName: '', email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            }
            if (!values.lastName) {
              errors.lastName = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
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
            <form onSubmit={handleSubmit}>
              <div className={classes.inputBox}>
                <label className={classes.inputLable}>First Name</label>
                <input
                  className={classes.inputStyle}
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <span className={classes.validationError}>
                  {errors.firstName && touched.firstName && errors.firstName}                             
                </span>
              </div>

              <div className={classes.inputBox}>
                <label className={classes.inputLable}>Last Name</label>
                <input
                  className={classes.inputStyle}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                <span className={classes.validationError}>
                  {errors.lastName && touched.lastName && errors.lastName}
                </span>
              </div>

              <div className={classes.inputBox}>
                <label className={classes.inputLable}>Email</label>
                <input
                  className={classes.inputStyle}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <span className={classes.validationError}>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>

              <div className={classes.inputBox}>
                <label className={classes.inputLable}>Password</label>
                <input
                  className={classes.inputStyle}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span className={classes.validationError}>
                  {errors.password && touched.password && errors.password}
                </span>
              </div>

              <button type="submit" disabled={isSubmitting} className={classes.inputButtonStyle}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </React.Fragment>
    )
}

export default withStyle(FormStyle)(LoginForm);