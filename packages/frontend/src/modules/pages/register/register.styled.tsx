/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import styled from 'styled-components';
import RegisterPageContainer from './register.page';

export const RegisterPage = styled(RegisterPageContainer)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: auto;
  .login-form-container {
    margin-top: 100px;
    width: fit-content;
    height: fit-content;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #303036;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .login-form-header {
    color: white;
    display: flex;
    font-weight: 600;
  }
  .login-form-button {
    border-radius: 500px;
    border: none;
    background-color: #424264;
    transition: all 0.2s;
    &:hover {
      background-color: #545483;
    }
    p {
      color: white;
      text-decoration: none;
      font-weight: 900;
    }
  }
  .login-additional {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .login-additional-text {
      color: #dad7e2;
    }
    .link {
      color: #dad7e2;
      &:hover {
        color: #4c4cb8;
        transition: all 0.2s;
      }
    }
    height: fit-content;
  }
  .error-message {
    color: red;
  }
`;
