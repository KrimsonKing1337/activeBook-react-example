import { Action } from 'components/ColoredTextTrigger/Action';
import { ExternalLink } from 'components/ExternalLink';
import { AuthorComment } from 'components/ColoredTextTrigger/AuthorComment';

import { Item } from 'pages/EffectExamples/components/Item';

// многострочный текст-рыба для проверки эффектов и изменений в настройках
export const FishText = () => {
  return (
    <Item>
      Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
      позволяет оценить значение существенных финансовых и административных условий.
      С другой стороны начало повседневной работы по формированию позиции требуют определения и уточнения
      существенных финансовых и административных условий.
      <br />
      <Action>Текст действия</Action>
      <br />
      <ExternalLink href="#">Внешняя ссылка</ExternalLink>
      <br />
      <AuthorComment>Комментарий автора</AuthorComment>
    </Item>
  );
};
