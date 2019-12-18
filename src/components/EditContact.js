import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/UI/Header';
import Button from './UI/Button';
import Form from '../components/Form';


const AddContact = () => (
  <>
    <Header />
    <Link to="/" style={{ marginLeft: '4rem' }}>
      <Button action="edit" name="Back" />
    </Link>
    <div>
      <Form />
    </div>
  </>
);

export default AddContact;
