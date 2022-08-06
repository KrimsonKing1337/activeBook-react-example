import React, { useState } from 'react';

import { Modal } from 'components/Modal';
import { Toggle } from 'components/Toggle';
import { Video as VideoComponent } from 'components/Video';

export const Video = () => {
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
      >
        {/* todo: видеоплеер, controls тут мешают элементам управления модалки */}
        <VideoComponent
          src="/assets/videos/TV_static-2.mp4"
          loop
          autoPlay
          muted
        />
      </Modal>

      <Toggle
        label="Модалка с видео"
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
