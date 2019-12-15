/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ action }) =>
    action === 'edit'
      ? '#333'
      : action === 'delete'
      ? 'red'
      : action === 'cancel'
      ? 'purple'
      : 'green'};
  color: #fff;
  padding: 1rem 4rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: inherit;
  border: none;
  outline: none;
  /* border: 1px solid #333; */
  box-shadow: 1px 2px 2px #777;
  border-radius: 0.5rem;
  margin-right: 4rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: translateY(-1px);

  &:hover {
    background-color: ${({ action }) =>
      action === 'edit'
        ? '#444'
        : action === 'delete'
        ? 'tomato'
        : action === 'cancel'
        ? 'purple'
        : 'lightgreen'};
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 1px 1px 4px #777;
    transform: translateY(1px);
  }
`;

export default StyledButton;
