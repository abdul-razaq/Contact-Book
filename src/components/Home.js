/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../components/UI/Header';
import Search from '../components/UI/Search';
import SideBar from '../components/UI/SideBar';
import AllContacts from '../components/AllContacts';
import SelectedContact from '../components/SelectedContact';
import StyledGrid from '../styles/StyledGrid';
import Button from './UI/Button';


const Home = ({
  contacts,
  contactHandlerCallback,
  selectedContact,
  onSearchInputHandler,
  searchValue,
  searchedContact,
}) => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '4rem', marginLeft: '7rem' }}>
        <Link to="/contact/new"><Button action="add" name="Add new contact" /></Link>
      </div>
      <StyledGrid>
        <SideBar
          searchedContact={searchedContact}
          contacts={contacts}
          contactHandlerCallback={contactHandlerCallback}
          onSearchInputHandler={onSearchInputHandler}
          searchValue={searchValue}
        >
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
  selectedContact: PropTypes.object.isRequired,
  onSearchInputHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchedContact: PropTypes.array.isRequired
};

export default Home;
