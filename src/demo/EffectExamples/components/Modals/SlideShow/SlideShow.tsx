import { useState } from 'react';

import { Img } from 'activeBook-core/components/Img';
import { Modal } from 'activeBook-core/components/Modal';
import { Toggle } from 'activeBook-core/components/Toggle';
import { SlideShow as SlideShowComponent } from 'activeBook-core/components/SlideShow';

export const SlideShow = () => {
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

    setModalIsActive(true);
    setButtonIsActive(true);
  };

  return (
    <>
      <Modal
        isOpen={modalIsActive}
        onClose={modalOnClose}
        mode="media"
        canCrop={true}
      >
        <SlideShowComponent isVisible={modalIsActive} mode="modal">
          <Img src="/assets/demo_data/img/1.jpg" />
          <Img src="/assets/demo_data/img/2.jpg" />
          <Img src="/assets/demo_data/img/3.jpg" />
          <Img src="/assets/demo_data/img/4.jpg" />
        </SlideShowComponent>
      </Modal>

      <Toggle
        label="Модалка со слайдшоу"
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
