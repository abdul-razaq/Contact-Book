/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from './UI/Header';
import StyledButton from '../styles/StyledButton';


const About = ({ clearAllContacts, history }) => {
  const onClearAllContacts = () => {
    clearAllContacts();
    history.push('/');
  };

  return (
    <>
      <Header />
      <StyledButton action="delete" onClick={onClearAllContacts}>delete all contacts</StyledButton>
    </>
  );
};

About.propTypes = {
  clearAllContacts: PropTypes.func,
  history: PropTypes.object,
};
export default withRouter(About);
