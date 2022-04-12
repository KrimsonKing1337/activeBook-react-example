import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useWelcomeOutside } from './hook';

export const Page30 = () => {
  useWelcomeOutside();

  return (
    <PageWrapper>
      <p>
        «Визуальная оценка ситуации» ввела героя в ступор.
      </p>
      <p>
        Всё, куда ни глянь, было белым. Весь космос был белым!
        И это пугало даже больше, чем непроглядная тьма.
        Вернее, это тоже была такая же тьма, только белого цвета.
        И как её тогда называть? Непроглядная белизна?.
      </p>
      <p>
        Охватила паника.
      </p>
      <p>
        Но нужно было двигаться дальше.
      </p>
    </PageWrapper>
  );
};
