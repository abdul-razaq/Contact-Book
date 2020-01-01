/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const AllContacts = React.memo( ({ contacts, contactHandlerCallback, searchedContact }) => {
  const selectedContact = contactId => {
    contactHandlerCallback(contactId);
  };

  let contactsToShow = [];

  if (searchedContact.length > 0) {
    contactsToShow = searchedContact;
  } else {
    contactsToShow = contacts;
  }

  return contactsToShow.map(({ firstname, lastname }) => {
    const contactId = `${firstname} ${lastname}`;

    return (
      <p key={contactId} onClick={() => selectedContact(contactId)}>
        {contactId}
      </p>
    );
  });
});

AllContacts.propTypes = {
  searchedContact: PropTypes.array,
  contacts: PropTypes.array,
  contactHandlerCallback: PropTypes.func,
};

export default AllContacts;
