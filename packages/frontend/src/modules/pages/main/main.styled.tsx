import styled from 'styled-components';
import MainPageContainer from '.';

export const MainPage = styled(MainPageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .main-container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
  }
  .main-events-contaner {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    background-color: #303036;
    border-radius: 8px;
  }
  .main-table-title {
    margin-inline: auto;
    width: fit-content;
    color: white;
    font-size: 36px;
    font-weight: 900;
  }
`;
