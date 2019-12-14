/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';


const AllContacts = ({ contacts, contactHandlerCallback }) => {

  const selectedContact = contactId => {
    contactHandlerCallback(contactId);
  };

  return contacts.map(contact => {

    const contactId = `${contact.firstname} ${contact.lastname}`;

    return (
      <p key={contactId} onClick={() => selectedContact(contactId)}>
        {contactId}
      </p>
    );
  });
};

export default AllContacts;
