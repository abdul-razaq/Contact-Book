/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyles';
import Container from '../styles/Container';
import Home from '../components/Home';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import About from '../components/About';


const App = () => {
  // STATES
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const [searchValue, setSearchValue] = useState('');

  const [searchedContact, setSearchedContact] = useState([]);


  useEffect(() => {
    const previousContacts = JSON.parse(localStorage.getItem('contacts'));
    if (previousContacts === null) {
      setContacts([]);
    }
    setContacts(previousContacts);
    
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setSelectedContact(contacts[0]);
  }, [contacts]);


  // EVENT HANDLERS
  const selectedContactHandler = contactId => {
    const select = contacts.filter(contact => {
      return `${contact.firstname} ${contact.lastname}` === contactId;
    });
    setSelectedContact(select[0]);
  };

  const onSearchInputHandler = searchInput => {
    setSearchValue(searchInput);
    const matchedContact = contacts.filter(
      ({ firstname, lastname }) =>
        `${firstname} ${lastname}`.toLowerCase() ===
        searchInput.trim().toLowerCase()
    );
    setSearchedContact(matchedContact);
  };

  // TODO: Add FlashMessage logic e.g "Contact Added!"
  const receiveFormData = formData => {
    setContacts(prevState => {
      for (const contact of prevState) {
        if (
          `${contact.firstname} ${contact.lastname}` ===
          `${formData.firstname} ${formData.lastname}`
        ) {
          return prevState;
        }
      }
      return [formData, ...prevState];
    });
    setSelectedContact(formData);
  };

  // clear all contacts
  const clearAllContacts = () => {
    localStorage.removeItem('contacts');
    setContacts([]);
  };

  // RETURNED JSX
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Home
              searchedContact={searchedContact}
              contacts={contacts}
              contactHandlerCallback={selectedContactHandler}
              selectedContact={selectedContact}
              onSearchInputHandler={onSearchInputHandler}
              searchValue={searchValue}
            />
          )}
        />
        <Route path="/about" exact render={() => <About clearAllContacts={clearAllContacts} />} />
        <Route
          path="/contact/new"
          exact
          render={() => <AddContact receiveFormData={receiveFormData} />}
        />
        <Route path="/contact/edit" exact component={EditContact} />
      </Switch>
    </Container>
  );
};

export default App;
