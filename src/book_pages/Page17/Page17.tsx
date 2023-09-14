import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';

export const Page17 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/police-come.mp3',
    playOnLoad: true,
  });

  useSideShadow({
    color: 'police',
    speed: 1000,
  });

  return (
    <PageWrapper>
      <p>
        Наконец, через время до ушей донёсся спасительный звук полицейских машин.
      </p>
      <p>
        Полицейские стали окружать дом. Сопротивление бесполезно.
      </p>
      <p>
        Господа офицеры сработали быстро, обошлось без жертв.
      </p>
      <p>
        Если не считать лёгкого ранения в руку и искалеченную жизнь Егора — всё было в порядке.
      </p>
    </PageWrapper>
  );
};
