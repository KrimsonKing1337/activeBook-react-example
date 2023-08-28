import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';

export const Page2 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/car-door-close-engine-start.mp3',
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="Кроме самого «файла»..»" triggerType="author" mode="text">
      Этот вопрос мучает меня до сих пор. И если при моей жизни изобретут телепорты — я ими пользоваться не стану
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Сев в свой старенький седан, он повернул ключ зажигания и поехал в место Икс.
      </p>
      <p>
        Звуки радио заглушали учащённый от волнения стук сердца.
      </p>
      <p>
        Но мысли всё равно пробивались наружу:
      </p>
      <p>
        «Если столь быстрое перемещение сквозь пространство есть передача свойств объекта путём разрушения исходника..
      </p>
      <p>
        Значит ли это, что переместится мой точный клон, а сам я погибну?
      </p>
      <p>
        Ведь сознание формируется в мозгу.
      </p>
      <p>
        А мозг будет уничтожен в одном месте и воссоздан в другом.
      </p>
      <p>
        Это как скопировать файл в другое место и удалить оригинал.
      </p>
      <p>
        Да, для всех остальных оба файла будут идентичны.
      </p>
      <p>
        {Comment}
      </p>
    </PageWrapper>
  );
};
