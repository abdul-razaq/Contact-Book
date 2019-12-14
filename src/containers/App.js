/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/GlobalStyles';
import Container from '../styles/Container';
import Home from '../components/Home';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      firstname: 'John',
      lastname: 'Doe',
      middlename: 'Jack',
      phoneNo: '+2348034545453',
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
      homeAddress: '33, Anderson street, Boston',
      officeAddress: '23, Zoey road, main building, Manchester',
      facebook: 'https://www.facebook.com/janedoe',
      twitter: 'twitter.com/doejane',
      linkedIn: 'linkedin.com/doejane',
      relationship: 'GirlFriend',
    },
  ]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const selectedContactHandler = (contactId) => {
    const select = contacts.filter(contact => {
      return `${contact.firstname} ${contact.lastname}` === contactId;
    })
    setSelectedContact(select[0]);
  }
  
  return (
    <Container>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact render={() => <Home contacts={contacts} contactHandlerCallback={selectedContactHandler} selectedContact={selectedContact} />} />
        <Route path="/about" exact render={() => <div>About</div>} />
      </Switch>
    </Container>
  );
};

export default App;
