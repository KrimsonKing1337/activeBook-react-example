import { Action } from 'activeBook-core/components/ColoredTextTrigger/Action';
import { ExternalLink } from 'activeBook-core/components/ExternalLink';
import { AuthorComment } from 'activeBook-core/components/ColoredTextTrigger/AuthorComment';
import { Item } from 'demo/EffectExamples/components/Item';

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
