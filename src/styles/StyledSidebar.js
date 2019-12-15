import styled from 'styled-components';


const StyledSidebar = styled.aside`

  background-color: #333;
  margin-top: -54rem;
  border-radius: 1rem;
  padding: 0 3rem;

  p {
    margin-top: -1.6rem;
    background-color: transparent;
    padding: 1rem 2rem;
    border-radius: .5rem;
    color: #fff;
    margin-left: -2rem;
    transition: all .2s ease-in;
  }

  p:hover {
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: .5rem;
    color: #333;
  }
`;

export default StyledSidebar;
