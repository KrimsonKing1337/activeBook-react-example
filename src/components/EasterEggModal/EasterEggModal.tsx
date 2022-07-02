import React, { useState } from 'react';

import { Modal as ModalComponent, ModalProps } from 'components/Modal';
import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';

export type ModalWithVideoEasterEggProps = {
  mode?: ModalProps['mode'];
  easterEggText: string;
  modalContent: React.ReactNode;
};

export const EasterEggModal = ({
  mode = 'media',
  easterEggText,
  modalContent,
}: ModalWithVideoEasterEggProps) => {
  const [isActive, setIsActive] = useState(false);

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
