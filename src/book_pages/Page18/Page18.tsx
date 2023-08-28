import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page18 = () => {
  const Comment1 = (
    <WithModal text="Егору" triggerType="author" mode="text">
      Главного героя я назвал в честь своего брата. Почему я пишу об этом аж здесь — не знаю
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="Ярик!" triggerType="author" mode="text">
      А его друга назвал в честь другого своего брата
    </WithModal>
  );

  return (
    <PageWrapper>
      <h1>Глава 4.</h1>
      <h2>Бесконечный поток информации</h2>

      <p>
        После того случая {Comment1} было очень сложно доверять людям, даже самым близким.
        Косвенно, это и стало причиной, по которой от него ушла жена.
        И поэтому он так дорожил своим единственным и настоящим другом — Яриком.
        Любовь приходит и уходит, но лучший друг остаётся.
      </p>
      <p>
        «Чёрт возьми, {Comment2} Я же обещал ему написать!» — внезапно вспомнил Егор, —
        «не уверен, что сообщение дойдёт из-за границы, но хотя бы сообщу, что телепортация прошла в штатном режиме».
      </p>
      <p>
        Он набрал сообщение и нажал на кнопку «отправить».
        Через какое-то время статус сообщения сменился на «отправлено». Но «доставлено» ждать было бессмысленно,
        в лучшем случае это произойдёт через пару-тройку дней.
        Поэтому Егор отложил свой наладонник и вернулся к штурвалу.
      </p>
    </PageWrapper>
  );
};
