import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page6 = () => {
  const Comment = (
    <WithModal text="в специальный костюм" triggerType="author" mode="text">
      Здесь вспоминается защитный костюм Гордона Фримена
    </WithModal>
  );

  return (
    <PageWrapper>
      <h1>
        Глава 2.
      </h1>
      <h2>
        Обратный отсчёт.
      </h2>
      <p>
        Пройдя все дополнительные тесты и переодевшись {Comment}, он поспешил к машине, ожидавшей его у выхода.
      </p>
      <p>
        «Интересно, она будет смотреть прямой эфир?» – думал Егор. Отношения давно
        закончились, но было чувство, что она ещё вернётся. Вернее, надежда.
      </p>
      <p>
        Отец гордился бы им. Если бы был жив. У Егора никого не было. Отчасти именно поэтому он был идеальным кандидатом
        на роль «заглядывающего», как прозвали его в народе. А отчасти потому, что он был выдающимся человеком в плане
        здоровья. Ведь неизвестно чего ожидать по «ту сторону изгороди». Так что он был, можно сказать, Гагариным нового
        поколения.
      </p>
      <p>
        Помните кадры из фильмов про космонавтов как их сопровождает целая делегация на пути к
        ракете и люди красиво выходили сквозь туман? Так вот сейчас это всё выглядело не так.
      </p>
      <p>
        Егор ехал в полнейшем одиночестве, не считая водителя. Который вёл автомобиль с
        полнейшей невозмутимостью. Вряд ли он согласился бы на лёгкую беседу перед
        путешествием.
      </p>
      <p>
        Ехалось уже спокойнее — всё-таки советы врача были учтены. Пара таблеток были приняты.
        Голова должна быть свежей.
      </p>
    </PageWrapper>
  );
};
