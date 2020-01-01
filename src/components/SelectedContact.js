/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledSelectedContact from '../styles/StyledSelectedContact';
import StyledButton from '../styles/StyledButton';

const SelectedContact = ({ selectedContact, onDeleteContact }) => {
  const {
    facebook,
    firstname,
    homeAddress,
    lastname,
    linkedIn,
    middlename,
    nickname,
    officeAddress,
    phoneNo,
    emailAddress,
    relationship,
    twitter,
  } = selectedContact || [];

  const contactToShow = (
    <StyledSelectedContact>
      <h3>Contact Details for {`"${firstname} ${lastname}"`} </h3>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Firstname{' '}
        </span>
        <span>{firstname}</span>
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Lastname{' '}
        </span>
        {lastname}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Middlename{' '}
        </span>
        {middlename}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Nickname{' '}
        </span>
        {nickname}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Phone{' '}
        </span>
        {phoneNo}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Email{' '}
        </span>
        {emailAddress}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Home Address{' '}
        </span>
        {homeAddress}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Office Address{' '}
        </span>
        {officeAddress}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Facebook{' '}
        </span>
        {facebook}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Twitter{' '}
        </span>
        {twitter}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          LinkedIn{' '}
        </span>
        {linkedIn}
      </p>
      <p>
        <span style={{ fontWeight: 'bold', textTransform: 'Capitalize' }}>
          Relationship{' '}
        </span>
        {relationship}
      </p>
      <Link to="/contact/edit">
        <StyledButton action="edit">edit</StyledButton>
      </Link>
      <StyledButton action="delete" onClick={onDeleteContact}>delete</StyledButton>
    </StyledSelectedContact>
  );

  if (!selectedContact) {
    return (
      <p style={{ marginTop: '-3rem', marginRight: '8rem', fontWeight: 900 }}>
        You do not have any contact yet, Add a new contact
      </p>
    );
  }
  return contactToShow;
};

SelectedContact.propTypes = {
  selectedContact: PropTypes.object,
};

export default React.memo(SelectedContact);
