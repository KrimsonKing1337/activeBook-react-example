import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

export const Page29 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/spacedoor-close.mp3',
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="оборвалась на середине. " triggerType="author" mode="text">
      Здесь я немного описал собственный опыт применения общей анестезии, у меня было именно так
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Включив систему поддержки сна, Егор лёг в специальную капсулу.
      </p>
      <p>
        Люк над головой закрылся.
      </p>
      <p>
        Почувствовалось лёгкое головокружение, которое всегда бывает перед тем как погрузиться в искусственный сон.
      </p>
      <p>
        Герой не успел ни о чём подумать — через секунду мысль резко {Comment}
        Морфей забрал его в свои объятия.
      </p>
    </PageWrapper>
  );
};
