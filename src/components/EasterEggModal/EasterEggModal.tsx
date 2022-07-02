import React, { useEffect, useState } from 'react';

import { Modal as ModalComponent, ModalProps } from 'components/Modal';
import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';

export type ModalWithVideoEasterEggProps = {
  mode?: ModalProps['mode'];
  easterEggText: string;
  modalContent: any; // todo: убрать any
};

export const EasterEggModal = ({
  mode = 'media',
  easterEggText,
  modalContent,
}: ModalWithVideoEasterEggProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (modalContent.type !== 'video') {
      return;
    }

    const videoRef = modalContent.ref;

    if (!videoRef?.current) {
      return;
    }

    const video = videoRef.current;

    if (isActive) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <>
      <ModalComponent
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        mode={mode}
        hideCropButton
        hideExpandButton
      >
        {modalContent}
      </ModalComponent>

      <EasterEggComponent onClick={() => setIsActive(true)}>
        {easterEggText}
      </EasterEggComponent>
    </>
  );
};
