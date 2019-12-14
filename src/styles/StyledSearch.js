import styled from 'styled-components';


const StyledSearch = styled.input`

  display: inline-block;
  margin: 4rem 0;
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border: 1px solid #bbb;
  border-radius: 5rem;
  color: #333;
  font-size: 1.8rem;
  transition: all .2s ease-out;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid #aaa;
  }

`;

export default StyledSearch;
