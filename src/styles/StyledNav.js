import styled from 'styled-components';


const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ul {
    display: flex;
    margin: 0;
    list-style: none;
  }

  ul li {
    padding: 0 2rem;
  }
`;

export default StyledNav;
