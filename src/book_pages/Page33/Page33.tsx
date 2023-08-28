import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useWelcomeOutside } from './hooks';

export const Page33 = () => {
  useWelcomeOutside();

  const Comment = (
    <WithModal text="Непроглядная белизна?.." triggerType="author" mode="text">
      Да, тут эффект в тему лишь если тема оформления оставлена по умолчанию тёмной.
      Но для ощущения изменения визуальной информации я применяю тот же эффект и для остальных тем
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        «Визуальная оценка ситуации» ввела героя в ступор.
      </p>
      <p>
        Всё, куда ни глянь, было белым. Весь космос был белым!
        И это пугало даже больше, чем непроглядная тьма.
        Вернее, это тоже была такая же тьма, только белого цвета.
        И как её тогда называть? {Comment}
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
