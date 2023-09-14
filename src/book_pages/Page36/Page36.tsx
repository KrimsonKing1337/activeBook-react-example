import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

export const Page36 = () => {
  const Comment = (
    <WithModal text="в голову." triggerType="author" mode="text">
      Здесь я хотел сделать эффект шрифта как у Терри Пратчетта, когда говорил Смерть, но в итоге оставил как есть
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        — Ты прав, это всё затянулось. Прошу прощения, я задремал и пропустил факт твоего прибытия, — голос звучал так,
        будто минуя слуховой аппарат, транслировался прямо {Comment}
      </p>
      <p>
        Егор решил, что он сошёл с ума.
      </p>
    </PageWrapper>
  );
};
