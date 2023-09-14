import { useState } from 'react';

import { EasterEgg as EasterEggComponent } from 'activeBook-core/components/ColoredTextTrigger/EasterEgg';
import { Modal } from 'activeBook-core/components/Modal';

import { Item } from 'pages/EffectExamples/components/Item';

export const EasterEgg = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => setModalIsActive(false);

  return (
    <Item>
      <Modal
        isOpen={modalIsActive}
        onClose={modalOnClose}
        canFullScreen={true}
      >
        Вы нашли пасхалку! Вот вам ачивка
      </Modal>

      <EasterEggComponent onClick={() => setModalIsActive(true)} id="page-sb">
        Текст с пасхалкой (нажми меня)
      </EasterEggComponent>
    </Item>
  );
};
