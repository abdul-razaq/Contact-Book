/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../components/UI/Header';
import StyledGrid from '../styles/StyledGrid';
import Button from './UI/Button';

const SideBar = React.lazy(() => import('../components/UI/SideBar'));
const Search = React.lazy(() => import('../components/UI/Search'));
const AllContacts = React.lazy(() => import('../components/AllContacts'));
const SelectedContact = React.lazy(() =>
  import('../components/SelectedContact')
);

const Home = ({
  contacts,
  contactHandlerCallback,
  selectedContact,
  onSearchInputHandler,
  searchValue,
  searchedContact,
  onDeleteContact,
}) => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ marginTop: '4rem', marginLeft: '7rem' }}>
          <Link to="/contact/new">
            <Button action="add" name="Add new contact" />
          </Link>
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
          <SelectedContact
            selectedContact={selectedContact}
            onDeleteContact={onDeleteContact}
          />
        </StyledGrid>
      </Suspense>
    </>
  );
};

Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactHandlerCallback: PropTypes.func.isRequired,
  selectedContact: PropTypes.object,
  onSearchInputHandler: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchedContact: PropTypes.array.isRequired,
};

export default Home;
