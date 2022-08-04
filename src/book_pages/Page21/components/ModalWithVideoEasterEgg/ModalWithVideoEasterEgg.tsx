import React, { RefObject } from 'react';

import { Modal } from 'components/Modal';
import { Video } from 'components/Video';

export type ModalWithVideoEasterEggProps = {
  isActive: boolean;
  setModalIsActive: (isActive: boolean) => void;
  videoRef: RefObject<HTMLVideoElement>;
};

export const ModalWithVideoEasterEgg = ({ setModalIsActive, isActive, videoRef }: ModalWithVideoEasterEggProps) => {
  const modalOnOpen = () => videoRef?.current?.play();
  const modalOnClose = () => setModalIsActive(false);

  return (
    <Modal
      isOpen={isActive}
      onOpen={modalOnOpen}
      onClose={modalOnClose}
      mode="media"
      canCrop
      canFullScreen
    >
      <Video src="/assets/book_data/videos/wow_turn.mp4" ref={videoRef} />
    </Modal>
  );
};
