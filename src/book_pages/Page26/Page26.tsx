import React, { useEffect, useState } from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/Action';
import { ExternalLink } from 'components/ExternalLink';
import { Modal } from 'components/Modal';

import { useAudio } from 'hooks/effects/audio';
import { useVibration } from 'hooks/effects/vibration';

export const Page26 = () => {
  const link = 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE_%D1%82%D1%83_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83_%D0%B8%D0%B7%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8';

  useAudio({
    src: '/assets/book_data/audios/sounds/cosmos-impacts.mp3',
    loop: true,
    playOnLoad: true,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { vibrationOn } = useVibration();

  useEffect(() => {
    // todo: loop segments, как в прежней версии книги
    vibrationOn(300);
  }, []);

  return (
    <PageWrapper>
      <Modal hideExpandButton isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <>
          Отсылка на анимационный мини-сериал
          <ExternalLink href={link}>
            «по ту сторону изгороди».
          </ExternalLink>
        </>
      </Modal>

      <p>
        В космосе не было звуков, поэтому голова сама воображала их. Каждый удар глухим эхом отзывался в голове.
      </p>
      <p>
        Наконец, стало появляться нечто белое. Правда пока это фиксировалось исключительно приборами.
        Пробилась совсем крошечная часть корабля.
      </p>
      <p>
        Медленно, но верно, Егор пробивался
        <Action onClick={() => setModalIsOpen(true)}>за ту сторону изгороди.</Action>
      </p>
      <p>
        Было удивительно, что такой способ вообще работал.
      </p>
    </PageWrapper>
  );
};
