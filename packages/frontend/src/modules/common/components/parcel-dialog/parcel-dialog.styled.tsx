import styled from 'styled-components';
import ParcelDialogComponent from './parcel-dialog.component';

export const ParcelDialog = styled(ParcelDialogComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: row;
  margin: 0;
  padding-block: 12px;
  .buttons-container {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .button {
    width: 220px;
    border-radius: 500px;
    max-height: 56px;
    border: none;
    background-color: #424264;
    transition: all 0.2s;
    &.red {
      background-color: #ff2e2e;
    }
    &.red:hover {
      background-color: #c42727;
    }
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
