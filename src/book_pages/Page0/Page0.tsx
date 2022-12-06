import React, { useEffect, useState } from 'react';

import { ModalDialog } from 'components/ModalDialog';
import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/ColoredTextTrigger/Action';

import { useSound } from 'hooks/effects/audio/sound';
import { useFlashlight } from 'hooks/effects/flashlight';
import { useVibration } from 'hooks/effects/vibration';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { flashlightInst } from 'utils/effects/flashlight';

import { useKonamiCode, useModal } from './hooks';

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
      vibrationOn(200);
      flashlightOn(200);
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
    try {
      await flashlightInst.init();
    } catch (err) {
      console.error(err);
    }

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

    if (isModalWasShowed) {
      go();

      return;
    }

    setModalIsActive(true);
  };

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper>
      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalCloseHandler}
        onConfirm={modalCloseHandler}
        onCancel={modalCloseHandler}
        canFullScreen={true}
        showCancelButton={false}
        cantCloseIn={5000}
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

      <header>
        По ту сторону изгороди
      </header>

      <article>
        Этот мини-рассказик следует воспринимать как забавную техно-демку.
        Я хотел показать пример того, что может получиться, если писать книжку в формате activeBook
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
