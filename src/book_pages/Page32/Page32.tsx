import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

export const Page32 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/spacedoor-open.mp3',
    playOnLoad: true,
  });

  const Comment1 = (
    <WithModal text="отсыпаясь за всю рабочую неделю." triggerType="author" mode="text">
      Ах, по-чаще бы такое..
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="Бред какой-то." triggerType="author" mode="text">
      В предыдущей версии сценария тут был твист, по которому главый герой попадал в точно такую же Вселенную,
      что и наша, но полностью инвертную. Все цвета и действия были полностью противоположными.
      Но в конце концов я отказался от этой идеи, т.к. не смог придумать концовку, которая бы меня устраивала
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Но по закону подлости его сон бесцеремонно прервали.
      </p>
      <p>
        Люк над ним открылся.
      </p>
      <p>
        Девочка тут же растворилась в забытье. И лишь слюни на бороде и подушке напоминали о сладком сне.
      </p>
      <p>
        Ничего не попишешь.
      </p>
      <p>
        Егор вылез из капсулы и потянулся, растирая глаза.
      </p>
      <p>
        Неделя пролетела словно миг.
      </p>
      <p>
        «Отходняков» от такого наркоза никогда не было. Просто как будто очень долго поспать в выходные, {Comment1}
      </p>
      <p>
        Приведя свои мысли в порядок, космонавт первым делом подошёл к приборам. Информация была крайне противоречивой.
        Вроде как корабль преодолел барьер, а вроде как и нет. И вместо чёрного цвета фиксировался белый. И почему-то
        почти вся информация дублировалась несколько раз. Как будто компьютер сошёл с ума. {Comment2}
      </p>
      <p>
        Вскинув брови в недоумении, Егор решил открыть иллюминаторы.
      </p>
      <p>
        И тут он удивился ещё сильнее. Если не сказать больше.
      </p>
    </PageWrapper>
  );
};
