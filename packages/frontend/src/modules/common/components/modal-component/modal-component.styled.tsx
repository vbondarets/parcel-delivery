import styled from 'styled-components';
import { ModalElemet as Modal } from './modal-component.component';

export const ModalComponent = styled(Modal)`
  .modal-container {
    min-height: 200px;
    min-width: 350px;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    background-color: #303036;
    padding-inline: 32px;
    padding-block: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    max-width: 1200px;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
  }
`;
