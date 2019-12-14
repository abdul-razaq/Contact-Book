/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/UI/Header';
import Search from '../components/UI/Search';
import SideBar from '../components/UI/SideBar';
import AllContacts from '../components/AllContacts';
import SelectedContact from '../components/SelectedContact';
import StyledGrid from '../styles/StyledGrid';


const Home = ({contacts, contactHandlerCallback, selectedContact}) => {
  
  return (
    <>
      <Header />
      <StyledGrid>
        <SideBar contacts={contacts} contactHandlerCallback={contactHandlerCallback}>
          <Search />
          <AllContacts />
        </SideBar>
        <SelectedContact selectedContact={selectedContact} />
      </StyledGrid>
    </>
  );
};


Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactHandlerCallback: PropTypes.func.isRequired,
  selectedContact: PropTypes.object.isRequired
}

export default Home;
