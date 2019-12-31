/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Header from '../components/UI/Header';
import Button from './UI/Button';

const Form = React.lazy(() => import('../components/Form'));

const AddContact = ({ receiveFormData }) => {
  return (
    <>
      <Header />
      <Link
        to="/"
        style={{ marginLeft: '4rem', position: 'absolute', top: '12rem' }}
      >
        <Button action="edit" name="Back" />
      </Link>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Form receiveFormData={receiveFormData} selectedContact={{}} />
        </Suspense>
      </div>
    </>
  );
};

AddContact.propTypes = {
  receiveFormData: PropTypes.func,
};

export default AddContact;
