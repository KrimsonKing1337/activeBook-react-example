import React, { useEffect, useState } from 'react';

import { ModalDialog } from 'components/ModalDialog';
import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/ColoredTextTrigger/Action';

import { useSound } from 'hooks/effects/audio/sound';
import { useFlashlight } from 'hooks/effects/flashlight';
import { useVibration } from 'hooks/effects/vibration';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { getIsMobile } from 'utils/mobile/getIsMobile';

import { useKonamiCode, useModal } from './hooks';

const isMobile = getIsMobile();

export const Page0 = () => {
  const [lastPage, setLastPage] = useState(0);

  useKonamiCode();

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();
  const { flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  const audioInst = useSound({
    src: '/assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
    onPlay() {
      vibrationOn(1000);
      flashlightOn(1000);
    },
  });

  useEffect(() => {
    const lastPageAsJSON = localStorage.getItem('lastPage');

    if (lastPageAsJSON) {
      const page = JSON.parse(lastPageAsJSON);

      setLastPage(page);
    }
  }, []);

  const go = async () => {
    await audioInst?.play();

    const pageToGo = lastPage > 0 ? lastPage : 1;

    goToPage(pageToGo);
  };

  const modalCloseHandler = () => {
    modalOnClose();

    go();
  };

  const clickHandler = () => {
    const isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);

    if (!isMobile || isModalWasShowed) {
      go();

      return;
    }

    setModalIsActive(true);
  };

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper>
      {isMobile && (
        <ModalDialog
          isOpen={modalIsActive}
          onClose={modalCloseHandler}
          onConfirm={modalCloseHandler}
          onCancel={modalCloseHandler}
          canFullScreen={true}
          showCancelButton={false}
        >
          <div>
            <header>
              ОБРАТИТЕ ВНИМАНИЕ
            </header>

            <article>
              <p>
                Для работы эффектов на основе вспышки, приложению необходимо получить разрешение к камере
                (к сожалению, нет возможности запросить разрешение только ко вспышке).
              </p>

              <p>
                Вы всегда можете запросить разрешение ещё раз, в меню приложения
              </p>
            </article>
          </div>
        </ModalDialog>
      )}

      <header>
        По ту сторону изгороди
      </header>

      <article>
        Дисклеймер: все описываемые персонажи события вымышлены, совпадения с реальными — чистая случайность.
      </article>

      <Action fullWidth onClick={clickHandler}>
        {label}
      </Action>

      <br />
      <br />

      <p>
        P. S.: Для наилучшего результата рекомендую читать с приглушенным светом, в наушниках и с тёмной темой
      </p>
    </PageWrapper>
  );
};
