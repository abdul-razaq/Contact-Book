/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Button from './UI/Button';
import StyledForm, { StyledInput, StyledLabel, styledstystyledErrorMessage } from '../styles/StyledForm';

const AddContactForm = ({
  firstName,
  lastName,
  middleName,
  nickName,
  phoneNo,
  emailAddress,
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
        emailAddress: emailAddress || '',
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
        emailAddress: Yup.string()
          .required('contact email address is required')
          .email('invalid email address'),
        homeAddress: Yup.string()
          .max(50, 'home Address must be 50 characters or less')
          .min(10, 'home Address must be 10 characters or more')
          .required(),
        officeAddress: Yup.string()
          .max(50, 'office Address must be 50 characters or less')
          .min(10, 'office Address must be 10 characters or more'),
        facebook: Yup.string(),
        twitter: Yup.string(),
        linkedIn: Yup.string(),
        relationship: Yup.string()
          .max(10, 'relationship must be 10 characters or less')
          .min(5, 'relationship must be 5 characters or more')
          .required('relationship with contact is required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
        setSubmitting(true);
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <Field
          as={StyledInput}
          name="firstName"
          type="text"
          placeholder="Enter contact first name..."
        />
        <styledErrorMessage name="firstName" />

        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <Field
          as={StyledInput}
          name="lastName"
          type="text"
          placeholder="Enter contact last name..."
        />
        <styledErrorMessage name="lastName" />

        <StyledLabel htmlFor="middleName">Middle name</StyledLabel>
        <Field
          as={StyledInput}
          name="middleName"
          type="text"
          placeholder="Enter contact middle name..."
        />
        <styledErrorMessage name="middleName" />

        <StyledLabel htmlFor="nickName">Nick Name</StyledLabel>
        <Field
          as={StyledInput}
          name="nickName"
          type="text"
          placeholder="Enter contact nick name..."
        />
        <styledErrorMessage name="nickName" />

        <StyledLabel htmlFor="phoneNo">Phone Number</StyledLabel>
        <Field
          as={StyledInput}
          name="phoneNo"
          type="text"
          placeholder="Enter contact phone number..."
        />
        <styledErrorMessage name="phoneNo" />

        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <Field
          as={StyledInput}
          name="email"
          type="email"
          placeholder="Enter contact email address..."
        />
        <styledErrorMessage name="phoneNo" />

        <StyledLabel htmlFor="homeAddress">Home Address</StyledLabel>
        <Field
          as={StyledInput}
          name="homeAddress"
          type="text"
          placeholder="Enter contact home address..."
        />
        <styledErrorMessage name="homeAddress" />

        <StyledLabel htmlFor="officeAddress">Office Address</StyledLabel>
        <Field
          as={StyledInput}
          name="officeAddress"
          type="text"
          placeholder="Enter contact office address..."
        />
        <styledErrorMessage name="officeAddress" />

        <StyledLabel htmlFor="facebook">Facebook Link</StyledLabel>
        <Field
          as={StyledInput}
          name="facebook"
          type="text"
          placeholder="e.g https://facebook.com/johndoe"
        />
        <styledErrorMessage name="facebook" />

        <StyledLabel htmlFor="twitter">Twitter Link</StyledLabel>
        <Field
          as={StyledInput}
          name="twitter"
          type="text"
          placeholder="e.g https://twitter.com/johndoe"
        />
        <styledErrorMessage name="twitter" />

        <StyledLabel htmlFor="linkedIn">LinkedIn Link</StyledLabel>
        <Field
          as={StyledInput}
          name="linkedIn"
          type="text"
          placeholder="e.g https://linkedin.com/johndoe"
        />
        <styledErrorMessage name="linkedIn" />

        <StyledLabel htmlFor="relationship">Relationship</StyledLabel>
        <Field
          as={StyledInput}
          name="relationship"
          type="text"
          placeholder="Enter relationship with contact. e.g Friend"
        />
        <styledErrorMessage name="relationship" />

        <Link to="/">
          <Button action="edit" name="cancel" />
        </Link>
        <Button name="submit" type="submit" />
      </StyledForm>
    </Formik>
  );
};

// PropTypes
AddContactForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  middleName: PropTypes.string,
  nickName: PropTypes.string,
  phoneNo: PropTypes.string,
  emailAddress: PropTypes.string,
  homeAddress: PropTypes.string,
  officeAddress: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  relationship: PropTypes.string,
};

export default AddContactForm;
