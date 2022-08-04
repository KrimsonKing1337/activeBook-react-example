import React, { useState } from 'react';

import { Modal } from 'components/Modal';
import { Toggle } from 'components/Toggle';
import { Img as ImgComponent } from 'components/Img';

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
