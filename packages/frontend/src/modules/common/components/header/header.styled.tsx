import styled from 'styled-components';
import HeaderComponent from './header.component';

export const Header = styled(HeaderComponent)`
  display: flex;
  width: 100vw;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #303036;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #242424;
  z-index: 2;
  .container {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    width: 100%;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  .image {
    height: 100%;
  }
  .link-container {
    display: flex;
    flex-direction: 'row';
    width: fit-content;
    gap: 24px;
  }
  .link {
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    &:hover {
      color: #b1b1b1;
    }
  }
  .login-button {
    cursor: pointer;
    padding-inline: 26px;
    background-color: #424264;
    border: 0px;
    transition: all 0.2s;
    border-radius: 30px;
    text-align: center;
    padding-bottom: 3px;
    &:hover {
      background-color: #545483;
    }
    p {
      color: white;
      text-decoration: none;
      font-weight: 900;
    }
  }
  .empty-container {
    width: 113px;
  }
`;
