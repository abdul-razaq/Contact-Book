/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';


const AllContacts = ({ contacts, contactHandlerCallback, searchedContact }) => {

  const selectedContact = contactId => {
    contactHandlerCallback(contactId);
  };

  let contactsToShow = null;

  if (searchedContact.length > 0) {
    contactsToShow = searchedContact; 
  } else {
    contactsToShow = contacts;
  }

  return contactsToShow.map(({firstname, lastname}) => {

    const contactId = `${firstname} ${lastname}`;

    return (
      <p key={contactId} onClick={() => selectedContact(contactId)}>
        {contactId}
      </p>
    );
  });
};

export default AllContacts;
