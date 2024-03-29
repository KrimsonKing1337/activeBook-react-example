import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

export const Page5 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/boo.mp3',
    playOnLoad: true,
    screamer: true,
  });

  const Comment = (
    <WithModal text="Бу!" triggerType="author" mode="text">
      Извините за это, не смог сдержаться и не добавить скример
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        - {Comment} - напугал он Егора, непонятно как оказавшись за углом раньше него.
      </p>
      <p>
        Вздохнув, наш герой протянул руку для приветствия. Он попался и бежать уже было некуда.
      </p>
      <p>
        – Здравствуй! - они пожали руки, – ну-ка дай-ка на тебя взглянуть.
      </p>
      <p>
        Человек в белом халате достал из кармана переносное устройство и навёл его на Егора.
      </p>
      <p>
        – Та-ак. Это в норме, это в норме, зафиксирован недосып.. – забубнил врач, – а вот пульс! Ты
        чего так волнуешься? Таблетки принял?
      </p>
      <p>
        – Да, – соврал человек без халата.
      </p>
      <p>
        – Если бы принял, пульс был бы в норме. Мы же обсуждали это тысячу раз. И спалось бы
        нормально! Ай ладно, как хочешь.. - махнул он рукой, – таблетки всё-таки назначаются не в
        приказном порядке.
      </p>
      <p>
        – Я могу идти?
      </p>
      <p>
        – Иди уж.
      </p>
      <p>
        И Егор зашагал дальше.
      </p>
      <p>
        Уже через несколько часов старт. Ну как через несколько.. Через 15. Наш герой явно не
        любил опаздывать.
      </p>
    </PageWrapper>
  );
};
