import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledNavLink = styled(NavLink)`

  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 4px solid transparent;
  transition: all .4s ease;

  &:hover,
  &:active {
    color: #fff;
    font-weight: bold;
    border-bottom: 4px solid #fff;
  }
`;

export default StyledNavLink