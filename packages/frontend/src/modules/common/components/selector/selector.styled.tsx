import styled from 'styled-components';
import { SelectorComponent } from './selector.component';

export const Selector = styled(SelectorComponent)`
  display: flex;
  justify-content: left;
  .slector-container {
  }
  .select-form > label {
    color: white;
  }
  .selector-selected {
    div {
      color: white;
    }
    &::before {
      border-color: white;
    }
    svg {
      stroke: white;
      fill: white;
    }
  }
`;
