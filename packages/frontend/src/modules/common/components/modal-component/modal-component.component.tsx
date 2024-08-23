/* eslint-disable @typescript-eslint/no-empty-interface */
import { Modal } from '@mui/material';
import { IBasicProps } from '../../types/props.types';
import { ReactElement } from 'react';

interface IProps extends IBasicProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactElement;
}

export const ModalElemet = ({
  className,
  isOpen,
  setIsOpen,
  children,
}: IProps) => {
  return (
    <Modal open={isOpen} onClose={setIsOpen} className={className}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Modal>
  );
};
