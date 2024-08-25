import styled from 'styled-components';
import CreatePageContainer from './create.page';

export const CreatePage = styled(CreatePageContainer)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex: 1;
  .create-container {
    width: 100%;
    height: 100%;
    padding-inline: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .buttons-container {
    display: flex;
    gap: 20px;
  }
  .button {
    width: 220px;
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
      font-size: 16px;
    }
  }
`;
