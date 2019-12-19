/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyles';
import Container from '../styles/Container';
import Home from '../components/Home';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';

const App = () => {
  // STATES
  const [contacts, setContacts] = useState([
    {
      firstname: 'John',
      lastname: 'Doe',
      middlename: 'Jack',
      phoneNo: '+2348034545453',
      emailAddress: 'sly@gmail.com',
      nickname: 'Sly',
      homeAddress: '21, Jump Street',
      officeAddress: '23, Jump Street',
      facebook: 'https://www.facebook.com/johnDoe',
      twitter: 'twitter.com/johndoe',
      linkedIn: 'linkedin.com/johndoe',
      relationship: 'Best Friend',
    },
    {
      firstname: 'Andrew',
      lastname: 'Mead',
      middlename: 'Nibble',
      phoneNo: '+12343001939313',
      emailAddress: 'ziko@gmail.com',
      nickname: 'Ziko',
      homeAddress: '441, eel road, massachussets',
      officeAddress: '321, zippo street, New York',
      facebook: 'https://www.facebook.com/andrewmead',
      twitter: 'twitter.com/meadandrew',
      linkedIn: 'linkedin.com/meadandrew',
      relationship: 'Instructor',
    },
    {
      firstname: 'Jane',
      lastname: 'Doe',
      middlename: 'Angela',
      phoneNo: '+1-31342452452452',
      nickname: 'SweetiePie',
      emailAddress: 'angela@gmail.com',
      homeAddress: '33, Anderson street, Boston',
      officeAddress: '23, Zoey road, main building, Manchester',
      facebook: 'https://www.facebook.com/janedoe',
      twitter: 'twitter.com/doejane',
      linkedIn: 'linkedin.com/doejane',
      relationship: 'GirlFriend',
    },
  ]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const [searchValue, setSearchValue] = useState('');

  const [searchedContact, setSearchedContact] = useState([]);

  const [flashMessage, setFlashMessage] = useState(null);

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
          // setFlashMessage(`Contact "${formData.firstname} ${formData.lastname}" already exists!, Add a new contact`);
          return prevState;
        }
      }
      return [formData, ...prevState];
    });
    setSelectedContact(formData);
    // setFlashMessage(`Contact "${formData.firstname} ${formData.lastname}" Added!`);
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
        <Route path="/about" exact render={() => <div>About</div>} />
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
