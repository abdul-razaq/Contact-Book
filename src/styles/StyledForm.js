import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';


export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1.7rem;
  color: #555;
  margin-left: 1rem;
  font-weight: 900;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: .8rem 1rem;
  border: none;
  outline: none;
  border-bottom: 1.4px solid #aaa;
  background-color: inherit;
  margin-bottom: 2rem;
  transition: all .2s ease-out;

  ::placeholder {
    font-size: 1.6rem;
  }

  :focus {
    border-bottom: 1.4px solid #888;
  }

`;

export const styledErrorMessage = styled.div`

  display: none;
`;


const StyledForm = styled(Form)`
  margin: auto;
  display: block;
  max-width: 60rem;
`;

export default StyledForm;
