/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

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
    relationship,
    twitter,
  } = selectedContact;
  return (
    <StyledSelectedContact>
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
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Facebook </span>
        {facebook}
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
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        {officeAddress}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        {twitter}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        {homeAddress}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        {linkedIn}
      </p>
      <p>
        <span style={{fontWeight: "bold", textTransform: "Capitalize"}}>Firstname </span>
        {relationship}
      </p>
      <Button action="edit" name="edit" />
      <Button action="delete" name="delete" />
    </StyledSelectedContact>
  );
};

SelectedContact.propTypes = {
  selectedContact: PropTypes.object.isRequired,
};

export default SelectedContact;
