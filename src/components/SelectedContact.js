/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledSelectedContact from '../styles/StyledSelectedContact';
import Button from '../components/UI/Button';

const SelectedContact = ({ selectedContact }) => {
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
  } = selectedContact;
  return (
    <StyledSelectedContact>
      <h3>Contact Details for {`"${firstname} ${lastname}"`} </h3>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        <span>{firstname}</span>
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Lastname </span>
        {lastname}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Middlename </span>
        {middlename}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Nickname </span>
        {nickname}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Phone </span>
        {phoneNo}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Email </span>
        {emailAddress}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Home Address </span>
        {homeAddress}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Office Address </span>
        {officeAddress}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Facebook </span>
        {facebook}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Twitter </span>
        {twitter}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>LinkedIn </span>
        {linkedIn}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Relationship </span>
        {relationship}
      </p>
      <Link to="/contact/edit">
        <Button action="edit" name="edit" />
      </Link>
      <Button action="delete" name="delete" />
    </StyledSelectedContact>
  );
};

SelectedContact.propTypes = {
  selectedContact: PropTypes.object.isRequired,
};

export default SelectedContact;
