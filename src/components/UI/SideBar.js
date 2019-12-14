/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Search from '../UI/Search';
import AllContacts from '../AllContacts';
import StyledSidebar from '../../styles/StyledSidebar';
import StyledAllContacts from '../../styles/AllContacts';


const SideBar = ({contacts, contactHandlerCallback}) => {

  return (
    <StyledSidebar>
      <Search />
      <StyledAllContacts>
        <AllContacts contacts={contacts} contactHandlerCallback={contactHandlerCallback} />
      </StyledAllContacts>
    </StyledSidebar>
  );
}

SideBar.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactHandlerCallback: PropTypes.func.isRequired
}

export default SideBar;
