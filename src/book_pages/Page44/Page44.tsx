import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEggModal } from 'components/EasterEggModal';

export const Page44 = () => {
  const EasterEgg = (
    <EasterEggModal
      easterEggText="Олег Шилов"
      modalContent={<img src="/assets/book_data/gifs/Kojima.gif" alt="" />}
    />
  );

  return (
    <PageWrapper>
      <h1>
        Над книгой работали
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
        Любимый кот: Дасти {/* todo: action вставить фотографию */}
      </p>
      <p>
        Большое спасибо: маме, папе, друзьям. Вы всегда верили в меня и эту идею
      </p>
      <p>
        Отдельное спасибо: тебе. Всегда приятно, когда твоё творение кому-то понравилось
      </p>
    </PageWrapper>
  );
};
