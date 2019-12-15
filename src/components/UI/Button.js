import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from '../../styles/StyledButton';


const Button = ({ action, name }) => {
  return (
    <StyledButton action={action} type="button">
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  action: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
