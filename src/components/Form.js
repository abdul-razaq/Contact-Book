/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// A custom validation function. This must return an object
// Which keys are symmetrical to our values / initalValues
// const validate = values => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

const Form = () => {
  // Pass the useFormik() hook initial form values and a submit function that will be called when the form is submitted
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: 'foo@email.bar',
  //   },

  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),

  //     lastName: Yup.string()
  //       .max(20, 'Must be 20 characters or less')
  //       .required('Required'),

  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Required'),
  //   }),

  //   onSubmit: values => {
  //     console.log(JSON.stringify(values));
  //   },
  // });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),

        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" {...formik.getFieldProps('firstName')} />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" {...formik.getFieldProps('lastName')} />
          {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}

          <label htmlFor="email">Email Address</label>
          <input id="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.lastName && <div>{formik.errors.email}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
