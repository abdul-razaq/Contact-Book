import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/UI/Header';
import Form from '../components/Form';
import Button from './UI/Button';

const AddContact = () => (
  <>
    <Header />
    <Link to="/" style={{ marginLeft: '4rem', position: "absolute", top: '12rem'}}>
      <Button action="edit" name="Back" />
    </Link>
    <div>
      <Form />
    </div>
  </>
);

export default AddContact;
