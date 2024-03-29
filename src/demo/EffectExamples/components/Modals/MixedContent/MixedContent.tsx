import { useState } from 'react';

import { Modal } from 'activeBook-core/components/Modal';
import { Toggle } from 'activeBook-core/components/Toggle';
import { Video } from 'activeBook-core/components/Video';
import { Img } from 'activeBook-core/components/Img';

export const MixedContent = () => {
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
      <Modal isOpen={modalIsActive} onClose={modalOnClose}>
        <div>
          <Img src="/assets/demo_data/img/cinemagraph.gif" />

          Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании систем
          массового участия. С другой стороны дальнейшее развитие различных форм деятельности играет важную роль в
          формировании модели развития. С другой стороны новая модель организационной деятельности представляет собой
          интересный эксперимент проверки соответствующий условий активизации. Не следует, однако забывать, что начало
          повседневной работы по формированию позиции играет важную роль в формировании новых предложений.

          <Video
            src="/assets/demo_data/videos/TV_static-2.mp4"
            loop
            autoPlay
            muted
          />

          Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет выполнять
          важные задания по разработке дальнейших направлений развития. Таким образом постоянный количественный рост и
          сфера нашей активности способствует подготовки и реализации существенных финансовых и административных
          условий. Задача организации, в особенности же новая модель организационной деятельности влечет за собой
          процесс внедрения и модернизации дальнейших направлений развития. Идейные соображения высшего порядка, а
          также постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по
          разработке форм развития.
        </div>
      </Modal>

      <Toggle
        label="Модалка с разным контентом"
        isActiveDefault={false}
        isActive={buttonIsActive}
        onClickOn={() => buttonClickHandler(true)}
        onClickOff={() => buttonClickHandler(false)}
      />
    </>
  );
};
