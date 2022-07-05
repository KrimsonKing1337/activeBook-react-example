import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEggModal } from 'components/EasterEggModal';
import { ActionModal } from 'components/ActionModal';

export const Page44 = () => {
  const EasterEgg = (
    <EasterEggModal
      easterEggText="Олег Шилов"
      modalContent={<img src="/assets/book_data/gifs/Kojima.gif" alt="" />}
    />
  );

  const Action = (
    <ActionModal
      actionText="Дасти"
      modalContent={<img src="/assets/book_data/images/Dusty.jpg" alt="" />}
    />
  );

  return (
    <PageWrapper>
      <h1>
        Над книгой принимали участие
      </h1>

      <br />

      <p>
        Сценарий, программирование, контент, менеджмент: {EasterEgg}
      </p>
      <p>
        UI / UX: Гордей Переходов
      </p>
      <p>
        Редактура: Максим Авраменко и Катерина Салдаева
      </p>
      <p>
        Любимый кот: {Action}
      </p>
      <p>
        Большое спасибо: маме, папе, друзьям. Вы всегда верили в меня и эту идею
      </p>
      <p>
        Отдельное спасибо: тебе. За то, что прочитал. Подписывайся на канал, ставь лайки. Стоп, это же не тот ресурс..
      </p>
      <p>
        Звуки взяты с сайта freesounds.org
      </p>
    </PageWrapper>
  );
};
