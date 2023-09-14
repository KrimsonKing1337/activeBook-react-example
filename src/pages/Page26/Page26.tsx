import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';

export const Page26 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/coin-dropping.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Отложив монетку, Егор взялся за штурвал. Раскачивая корабль взад-вперёд, он стал таранить невидимый барьер.
      </p>
      <p>
        Эффекта не было.
      </p>
      <p>
        Тогда он стал увеличивать амплитуду.
      </p>
    </PageWrapper>
  );
};
