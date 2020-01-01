/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyles';
import Container from '../styles/Container';
import Home from '../components/Home';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// Lazy loaded components
const About = React.lazy(() => import('../components/About'));
const AddContact = React.lazy(() => import('../components/AddContact'));
const EditContact = React.lazy(() => import('../components/EditContact'));

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

  // Updating existing contact
  const updateContactWithFormData = formData => {
    let presentContact = JSON.parse(localStorage.getItem('contacts'));
    const filteredContact = presentContact.filter(
      contact =>
        `${contact.firstname} ${contact.lastname}` !==
        `${formData.firstname} ${formData.lastname}`
    );
    const updatedContact = [formData, ...filteredContact];
    setContacts(updatedContact);
  };

  const deleteContact = () => {
    const presentContact = JSON.parse(localStorage.getItem('contacts'));
    const filteredContact = presentContact.filter(
      contact =>
        `${contact.firstname} ${contact.lastname}` !==
        `${selectedContact.firstname} ${selectedContact.lastname}`
    );
    setContacts(filteredContact);
  };

  // delete all contacts
  const clearAllContacts = () => {
    setContacts([]);
  };

  // RETURNED JSX
  return (
    <Container>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
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
                onDeleteContact={deleteContact}
                searchValue={searchValue}
              />
            )}
          />

          <Route
            path="/about"
            exact
            render={() => <About clearAllContacts={clearAllContacts} />}
          />
          <Route
            path="/contact/new"
            exact
            render={() => <AddContact receiveFormData={receiveFormData} />}
          />
          <Route
            path="/contact/edit"
            exact
            render={() => (
              <EditContact
                selectedContact={selectedContact}
                updateContact={updateContactWithFormData}
              />
            )}
          />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
