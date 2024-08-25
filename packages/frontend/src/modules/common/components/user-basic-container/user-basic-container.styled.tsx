import styled from 'styled-components';
import UserBasic from './user-basic-container';

export const UserBasicComponent = styled(UserBasic)`
  padding: 8px;
  padding-inline: 16px;
  background-color: #303036;
  margin-top: 8px;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  border: 1px solid #242424;
  p {
    color: white;
  }
  .bold {
    font-weight: 600;
  }
  .user-text-container {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
`;
