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
        <div>Firstname </div>
        <div>{firstname}</div>
      </p>
      <p>
        <div>Lastname </div>
        {lastname}
      </p>
      <p>
        <div>Middlename </div>
        {middlename}
      </p>
      <p>
        <div>Facebook </div>
        {facebook}
      </p>
      <p>
        <div>Nickname </div>
        {nickname}
      </p>
      <p>
        <div>Phone </div>
        {phoneNo}
      </p>
      <p>
        <div>Firstname </div>
        {officeAddress}
      </p>
      <p>
        <div>Firstname </div>
        {twitter}
      </p>
      <p>
        <div>Firstname </div>
        {homeAddress}
      </p>
      <p>
        <div>Firstname </div>
        {linkedIn}
      </p>
      <p>
        <div>Firstname </div>
        {relationship}
      </p>
      <Button />
      <Button />
    </StyledSelectedContact>
  );
};

SelectedContact.propTypes = {
  selectedContact: PropTypes.object.isRequired,
};

export default SelectedContact;
