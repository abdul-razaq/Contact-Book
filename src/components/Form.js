/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddContactForm = ({
  firstName,
  lastName,
  middleName,
  nickName,
  phoneNo,
  homeAddress,
  officeAddress,
  facebook,
  twitter,
  linkedIn,
  relationship,
}) => {
  return (
    <Formik
      initialValues={{
        firstName: firstName || '',
        lastName: lastName || '',
        middleName: middleName || '',
        nickName: nickName || '',
        phoneNo: phoneNo || '',
        homeAddress: homeAddress || '',
        officeAddress: officeAddress || '',
        facebook: facebook || '',
        twitter: twitter || '',
        linkedIn: linkedIn || '',
        relationship: relationship || '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'first name must be 15 characters or less')
          .min(3, 'first name must be 3 characters or more')
          .required('first name must be provided'),

        lastName: Yup.string()
          .max(15, 'last name must be 15 characters or less')
          .min(3, 'last name must be 3 characters or more')
          .required('last name must be provided'),

        middleName: Yup.string(),
        nickName: Yup.string(),
        phoneNo: Yup.string().max(
          12,
          'phone number must be 15 characters or less'
        ),
        homeAddress: Yup.string()
          .max(20, 'home Address must be 20 characters or less')
          .min(10, 'home Address must be 10 characters or more')
          .required(),
        officeAddress: Yup.string()
          .max(20, 'office Address must be 20 characters or less')
          .min(10, 'office Address must be 10 characters or more'),
        facebook: Yup.string(),
        twitter: Yup.string(),
        linkedIn: Yup.string(),
        relationship: Yup.string()
          .max(10, 'relationship must be 10 characters or less')
          .min(5, 'relationship must be 5 characters or more')
          .required('relationship with contact is required'),
      })}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          type="text"
          placeholder="Enter contact first name..."
        />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          type="text"
          placeholder="Enter contact last name..."
        />
        <ErrorMessage name="lastName" />

        <label htmlFor="middleName">Middle name</label>
        <Field
          name="middleName"
          type="text"
          placeholder="Enter contact middle name..."
        />
        <ErrorMessage name="middleName" />

        <label htmlFor="nickName">Nick Name</label>
        <Field
          name="nickName"
          type="text"
          placeholder="Enter contact nick name..."
        />
        <ErrorMessage name="nickName" />

        <label htmlFor="phoneNo">Phone Number</label>
        <Field
          name="phoneNo"
          type="text"
          placeholder="Enter contact phone number..."
        />
        <ErrorMessage name="phoneNo" />

        <label htmlFor="homeAddress">Home Address</label>
        <Field
          name="homeAddress"
          type="text"
          placeholder="Enter contact home address..."
        />
        <ErrorMessage name="homeAddress" />

        <label htmlFor="officeAddress">Office Address</label>
        <Field
          name="officeAddress"
          type="text"
          placeholder="Enter contact office address..."
        />
        <ErrorMessage name="officeAddress" />

        <label htmlFor="facebook">Facebook Link</label>
        <Field
          name="facebook"
          type="text"
          placeholder="e.g https://facebook.com/johndoe"
        />
        <ErrorMessage name="facebook" />

        <label htmlFor="twitter">Twitter Link</label>
        <Field
          name="twitter"
          type="text"
          placeholder="e.g https://twitter.com/johndoe"
        />
        <ErrorMessage name="twitter" />

        <label htmlFor="linkedIn">LinkedIn Link</label>
        <Field
          name="linkedIn"
          type="text"
          placeholder="e.g https://linkedin.com/johndoe"
        />
        <ErrorMessage name="linkedIn" />

        <label htmlFor="relationship">Relationship</label>
        <Field
          name="relationship"
          type="text"
          placeholder="Enter relationship with contact. e.g Friend"
        />
        <ErrorMessage name="relationship" />
      </Form>
    </Formik>
  );
};

// PropTypes
AddContactForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  middleName: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  phoneNo: PropTypes.string.isRequired,
  homeAddress: PropTypes.string.isRequired,
  officeAddress: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  relationship: PropTypes.string.isRequired,
}

export default AddContactForm;
