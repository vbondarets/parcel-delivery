import styled from 'styled-components';
import { InputComponent } from './input.component';

export const Input = styled(InputComponent)`
  display: flex;
  justify-content: left;
  flex-direction: column;
  .input-label {
    color: white;
    display: flex;
    font-weight: 600;
    flex-direction: column;
    justify-content: start;
    width: fit-content;
    margin-bottom: 4px;
    outline-offset: none;
    outline-color: transparent;
    background-color: transparent;
  }
  .input-wrapper {
    margin-top: 6px;
    padding: 10px;
    background-color: #3c3c53;
    width: 240px;
    height: 24px;
    display: flex;
    align-items: 'center';
    border-radius: 100px;
  }
  .input {
    min-width: 80%;
    font-weight: 400;
    outline: none;
    outline-offset: none;
    outline-color: transparent;
    background-color: transparent;
    border: none;
    margin-left: 4px;
    color: white;
  }
  .input-icon-container {
    height: 25px;
    width: 25px;
  }
`;
