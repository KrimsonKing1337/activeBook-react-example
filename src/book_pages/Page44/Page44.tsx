import React from 'react';

import { Spoiler } from 'components';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page44 = () => {
  const EasterEgg = (
    <WithModal text="Олег Шилов" triggerType="egg" eggId="page-44">
      <img src="/assets/book_data/gifs/Kojima.gif" alt="" />
    </WithModal>
  );

  const Action = (
    <WithModal text="Дасти" triggerType="action">
      <img src="/assets/book_data/images/Dusty.jpg" alt="" />
    </WithModal>
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

      <br />

      <Spoiler label="Копирайты">
        <div>
          <p>
            Звуки взяты с сайтов freesounds.org и noisefx.ru
          </p>

          <p>
            Авторы звуков:
          </p>
          <p>
            RecForge II;
            <br />
            Patrick Hunt;
            <br />
            klankbeeld
            <br />
            jon bellini;
            <br />
            Adam Matthews;
            <br />
            John Dominoski;
          </p>

          <p>
            Авторы музыки:
          </p>
          <p>
            Сергей Ейбог;
            <br />
            Вадим Самойлов;
            <br />
            Глеб Самойлов;
            <br />
            Кирк Хамильтон;
            <br />
            Брайан Кози;
            <br />
            Чарли Бриззет;
            <br />
            Jorge "Vasco" Vasconcelo
            <br />
            Juha "Millboy" Myllylä
          </p>

          <p>
            P.S.: если кого-то забыл упомянуть - дайте знать, обязательно добавлю в список
          </p>
        </div>
      </Spoiler>
    </PageWrapper>
  );
};
