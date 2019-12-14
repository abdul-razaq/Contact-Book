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
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{middlename}</p>
      <p>{facebook}</p>
      <p>{nickname}</p>
      <p>{phoneNo}</p>
      <p>{officeAddress}</p>
      <p>{twitter}</p>
      <p>{homeAddress}</p>
      <p>{linkedIn}</p>
      <p>{relationship}</p>
      <Button />
      <Button />
    </StyledSelectedContact>
  );
};

SelectedContact.propTypes = {
  selectedContact: PropTypes.object.isRequired,
};

export default SelectedContact;
