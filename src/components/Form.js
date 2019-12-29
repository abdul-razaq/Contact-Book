/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from './UI/Button';
import StyledForm, {
  StyledInput,
  StyledLabel,
  StyledErrorMessage,
  StyledFormButton,
} from '../styles/StyledForm';

const AddContactForm = ({
  firstname,
  lastname,
  middlename,
  nickname,
  phoneNo,
  emailAddress,
  homeAddress,
  officeAddress,
  facebook,
  twitter,
  linkedIn,
  relationship,
  history,
  receiveFormData,
}) => {
  return (
    <Formik
      initialValues={{
        firstname: firstname || '',
        lastname: lastname || '',
        middlename: middlename || '',
        nickname: nickname || '',
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
        firstname: Yup.string()
          .max(15, 'first name must be 15 characters or less')
          .min(3, 'first name must be 3 characters or more')
          .required('first name must be provided'),

        lastname: Yup.string()
          .max(15, 'last name must be 15 characters or less')
          .min(3, 'last name must be 3 characters or more')
          .required('last name must be provided'),

        middlename: Yup.string(),
        nickname: Yup.string(),
        phoneNo: Yup.string()
          .required('contact phone number is required')
          .max(12, 'phone number must be 12 characters or less'),
        emailAddress: Yup.string()
          .required('contact email address is required')
          .email('invalid email address'),
        homeAddress: Yup.string()
          .max(50, 'home Address must be 50 characters or less')
          .min(10, 'home Address must be 10 characters or more')
          .required('contact home address is required'),
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
        receiveFormData(values);
        setSubmitting(true);
        history.replace('/');
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="firstname">First Name</StyledLabel>
        <Field
          as={StyledInput}
          name="firstname"
          type="text"
          placeholder="Enter contact first name..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="firstname" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="lastname">Last Name</StyledLabel>
        <Field
          as={StyledInput}
          name="lastname"
          type="text"
          placeholder="Enter contact last name..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="lastname" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="middlename">Middle name</StyledLabel>
        <Field
          as={StyledInput}
          name="middlename"
          type="text"
          placeholder="Enter contact middle name..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="middlename" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="nickname">Nick Name</StyledLabel>
        <Field
          as={StyledInput}
          name="nickname"
          type="text"
          placeholder="Enter contact nick name..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="nickname" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="phoneNo">Phone Number</StyledLabel>
        <Field
          as={StyledInput}
          name="phoneNo"
          type="text"
          placeholder="Enter contact phone number..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="phoneNo" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="emailAddress">Email Address</StyledLabel>
        <Field
          as={StyledInput}
          name="emailAddress"
          type="email"
          placeholder="Enter contact email address..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="emailAddress" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="homeAddress">Home Address</StyledLabel>
        <Field
          as={StyledInput}
          name="homeAddress"
          type="text"
          placeholder="Enter contact home address..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="homeAddress" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="officeAddress">Office Address</StyledLabel>
        <Field
          as={StyledInput}
          name="officeAddress"
          type="text"
          placeholder="Enter contact office address..."
        />
        <StyledErrorMessage>
          <ErrorMessage name="officeAddress" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="facebook">Facebook</StyledLabel>
        <Field
          as={StyledInput}
          name="facebook"
          type="text"
          placeholder="e.g https://facebook.com/johndoe"
        />
        <StyledErrorMessage>
          <ErrorMessage name="facebook" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="twitter">Twitter</StyledLabel>
        <Field
          as={StyledInput}
          name="twitter"
          type="text"
          placeholder="e.g https://twitter.com/johndoe"
        />
        <StyledErrorMessage>
          <ErrorMessage name="twitter" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="linkedIn">LinkedIn</StyledLabel>
        <Field
          as={StyledInput}
          name="linkedIn"
          type="text"
          placeholder="e.g https://linkedin.com/johndoe"
        />
        <StyledErrorMessage>
          <ErrorMessage name="linkedIn" />
        </StyledErrorMessage>

        <StyledLabel htmlFor="relationship">Relationship</StyledLabel>
        <Field
          as={StyledInput}
          name="relationship"
          type="text"
          placeholder="Enter relationship with contact. e.g Friend"
        />
        <StyledErrorMessage>
          <ErrorMessage name="relationship" />
        </StyledErrorMessage>

        <StyledFormButton>
          <Link to="/">
            <Button action="edit" name="cancel" />
          </Link>
          <Button name="submit" type="submit" />
        </StyledFormButton>
      
      </StyledForm>
    </Formik>
  );
};

// PropTypes
AddContactForm.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  middlename: PropTypes.string,
  nickname: PropTypes.string,
  phoneNo: PropTypes.string,
  emailAddress: PropTypes.string,
  homeAddress: PropTypes.string,
  officeAddress: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  relationship: PropTypes.string,
  history: PropTypes.object,
  receiveFormData: PropTypes.func,
};

export default withRouter(AddContactForm);
