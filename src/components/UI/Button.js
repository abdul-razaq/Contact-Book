/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from '../../styles/StyledButton';


const Button = ({ action, name }) => {
  return (
    <StyledButton action={action} type="submit">
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  action: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Button;
