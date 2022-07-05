import React, { useEffect, useState } from 'react';

import { ModalDialog } from 'components';

import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/ColoredTextTrigger/Action';

import { useSound } from 'hooks/effects/audio/sound';
import { useFlashlight } from 'hooks/effects/flashlight';
import { useVibration } from 'hooks/effects/vibration';

import { goToPage } from 'utils/control/goToPage';
import { Flags, modalsWereShowed } from 'utils/localStorage/modalsWereShowed';

import { useKonamiCode, useModal } from './hooks';

export const Page0 = () => {
  const [ lastPage, setLastPage ] = useState(1);

  useKonamiCode();

  const { modalIsActive, modalOnClose, setModalIsActive } = useModal();

  const audioInst = useSound({
    src: '/assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
  });

  const { flashlightOff, flashlightOn } = useFlashlight();
  const { vibrationOn } = useVibration();

  useEffect(() => {
    return () => flashlightOff();
  }, []);

  useEffect(() => {
    const lastPageAsJSON = localStorage.getItem('lastPage');

    if (lastPageAsJSON) {
      const page = JSON.parse(lastPageAsJSON);

      setLastPage(page);
    }
  }, []);

  function modalCloseHandler() {
    modalOnClose();

    go();
  }

  async function go() {
    flashlightOn();

    vibrationOn(1000);

    await audioInst?.play();

    const pageToGo = lastPage > 0 ? lastPage : 1;

    goToPage(pageToGo);
  }

  function clickHandler() {
    const isModalWasShowed = modalsWereShowed.get(Flags.usingCamera);

    if (isModalWasShowed) {
      go();

      return;
    }

    setModalIsActive(true);
  }

  const label = lastPage > 0 ? 'Продолжить читать' : 'Начать читать';

  return (
    <PageWrapper withoutToolbar>
      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalCloseHandler}
        onConfirm={modalCloseHandler}
        onCancel={modalCloseHandler}
        hideExpandButton={true}
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

      <header>
        По ту сторону изгороди
      </header>

      <article>
        Дисклеймер: все описываемые персонажи события вымышлены, совпадения с реальными — чистая случайность.
        <br />
        <br />
        P.S.: здесь есть пасхалки
      </article>

      <Action fullWidth onClick={clickHandler}>
        {label}
      </Action>
    </PageWrapper>
  );
};
