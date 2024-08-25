import styled from 'styled-components';
import ParcelComponent from './parcel.component';

export const Parcel = styled(ParcelComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: row;
  margin: 0;
  padding-block: 12px;
  .parcel-container {
    padding-inline: 24px;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    background-color: #414149;
    border-radius: 8px;
    transition: all 0.2s;
    padding-block: 4px;
    gap: 4px;
    &:hover {
      background-color: #4e4e57;
    }
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
