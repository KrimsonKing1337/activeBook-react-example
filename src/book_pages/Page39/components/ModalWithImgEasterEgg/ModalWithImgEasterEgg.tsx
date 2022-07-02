import React from 'react';

import { Modal } from 'components/Modal';

export type ModalWithVideoEasterEggProps = {
  isActive: boolean;
  setModalIsActive: (isActive: boolean) => void;
};

export const ModalWithImgEasterEgg = ({ setModalIsActive, isActive }: ModalWithVideoEasterEggProps) => {
  const modalOnClose = () => setModalIsActive(false);

  return (
    <Modal
      isOpen={isActive}
      onClose={modalOnClose}
      mode={'media'}
      hideCropButton
      hideExpandButton
    >
      <img src="/assets/book_data/images/42.jpg" alt="" />
    </Modal>
  );
};
