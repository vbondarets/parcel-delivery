import styled from 'styled-components';
import ParcelComponent from './parcel-form.component';

export const ParcelForm = styled(ParcelComponent)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: auto;
  .parcel-form-container {
    width: fit-content;
    height: fit-content;
    padding-inline: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .parcel-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .parcel-form-header {
    color: white;
    display: flex;
    font-weight: 600;
  }
  .parcel-form-button {
    border-radius: 500px;
    border: none;
    background-color: #424264;
    height: fit-content;
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
  .parcel-additional {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .parcel-additional-text {
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
  .parcel-button-loader {
    color: #9da6ff;
    fill: #9da6ff;
    circle {
      fill: #9da6ff;
    }
  }
`;
