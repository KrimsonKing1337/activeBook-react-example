import { useState } from 'react';

import { Modal } from 'activeBook-core/components/Modal';
import { Toggle } from 'activeBook-core/components/Toggle';
import { Img as ImgComponent } from 'activeBook-core/components/Img';

export const Img = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);
    setButtonIsActive(false);
  };

  const buttonClickHandler = (value: boolean) => {
    if (!value) {
      return;
    }

    setButtonIsActive(true);
    setModalIsActive(true);
  };

  return (
    <>
      <Modal
        isOpen={modalIsActive}
        onClose={modalOnClose}
        mode="media"
        canFullScreen={true}
      >
        <ImgComponent src="/assets/img/cinemagraph.gif" />
      </Modal>

      <Toggle
        label="Модалка с изображением"
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
