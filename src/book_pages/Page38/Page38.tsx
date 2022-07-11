import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { Action as ActionComponent } from 'components/ColoredTextTrigger/Action';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';

export const Page38 = () => {
  const sound = useSound({
    src: 'assets/book_data/audios/sounds/atari.mp3',
  });

  const Action = (
    <ActionComponent onClick={() => sound?.play()}>
      синтезатора речи
    </ActionComponent>
  );

  const Comment1 = (
    <WithModal text="прозвучал ответ." triggerType="author" mode="text">
      Отсылка, думаю, очевидна
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="эмоциональными существами.." triggerType="author" mode="text">
      Тут отсылка на фильм Интерстеллар и компьютер, который выдал подобную фразу на вопрос,
      почему тот не на 100% честен с людьми
    </WithModal>
  );

  const Comment3 = (
    <WithModal text="старой игровой приставки" triggerType="author" mode="text">
      Здесь я вставил пример синтезатора речи Атари 2600
    </WithModal>
  );

  const Comment4 = (
    <WithModal text="закольцованной." triggerType="author" mode="text">
      Я себе это представил, как миры у прекрасной игры «Вангеры» — в форме бублика
    </WithModal>
  );

  const Comment5 = (
    <WithModal text="заключил Александр." triggerType="author" mode="text">
      Я считаю, что я здесь выкрутился не лучшим образом, но тем не менее
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        В итоге он смог совладать с собой.
      </p>
      <p>
        Но как только он поднёс горсть ко рту, голос вновь заговорил:
      </p>
      <p>
        — Ты не сходишь с ума.
      </p>
      <p>
        Кое-как совладав с собой, Егор решил поговорить с голосом:
      </p>
      <p>
        — Кто ты? Или что ты? — произнёс он вслух.
      </p>
      <p>
        — Я часть той силы, что вечно хочет зла и вечно совершает благо, — {Comment1}
      </p>
      <p>
        В голове мелькнул портрет классического русского писателя.
      </p>
      <p>
        — Что? - лишь смог выдавить из себя Егор.
      </p>
      <p>
        — Ладно, я пошутил, извини. Я посчитал, что будет уместно разрядить обстановку. Ведь я создал людей
        {Comment2} — произнёс голос. Голос звучал почти безэмоционально, даже сухо. Будто из
        {Action} какой-нибудь {Comment3} из 20 века.
      </p>
      <p>
        Егор молчал в растерянности. Голос продолжил:
      </p>
      <p>
        — Я тот, кого некоторые из вас называют Богом. Создателем. На самом же деле моё имя Санёк.
      </p>
      <p>
        Егор вскинул брови в удивлении. «Санёк? Серьёзно!?» — подумалось ему.
      </p>
      <p>
        — Ладно, я снова шучу. Моё имя невозможно адаптировать в человеческую речь. Но ты можешь звать меня и
        Александром, если тебе так удобно. Уверен, у тебя много вопросов. Валяй, — голос как будто стал звучать мягче.
      </p>
      <p>
        — Что происходит вообще? Где я? За пределами Вселенной лишь ты? — начал Егор спутано.
      </p>
      <p>
        — Давай по порядку. Да, ты за пределами границ вашей Вселенной. Их много. Каких угодно форм и размеров. И
        вложенностей. Наши вселенные вот вложены друг в друга как матрёшки. Не уверен, что люди смогли бы на самом деле
        покинуть границы своей, т.к. я её создал {Comment4} Но есть и грустные новости. Ты умер, Егор, — выдал
        Александр.
      </p>
      <p>
        — Я умер? - в шоке спросил наш главный герой. И продолжил, — то есть за пределами Вселенной люди неспособны
        существовать в своей, хмм, биологической оболочке? — вопрошал он.
      </p>
      <p>
        — Всё не совсем так. Ты умер почти на старте взлёта. Ракета взорвалась при попытке произвести телепортацию.
        Неисправность, которую ты проигнорировал. Помнишь?
      </p>
      <p>
        — Но я же столько всего видел!.. - начал было Егор.
      </p>
      <p>
        — Мне стало жаль тебя. Поэтому я устроил для тебя такое представление. Ты и так столько всего неприятного
        пережил.. Тараном пробиваться через границу Вселенной? Ты правда в это веришь? Конечно, это было лишь
        представление.
      </p>
      <p>
        — А почему.. Почему здесь всё другого цвета? — не унимался Егор.
      </p>
      <p>
        — Другого цвета? Что ты имеешь в виду? — удивился Голос.
      </p>
      <p>
        — В моей Вселенной космос чёрный, здесь же он белый, — пояснил наш герой.
      </p>
      <p>
        — Хм.. — призадумался Голос, — стало быть зря мне высший балл поставили. Я допустил ошибку. Я знал, что это
        может произойти, но всё-таки уделил этому недостаточно внимания. Существа в вашей Вселенной воспринимают цвета в
        инверсии. Неприятно, но могло быть хуже, — {Comment5}
      </p>
    </PageWrapper>
  );
};
