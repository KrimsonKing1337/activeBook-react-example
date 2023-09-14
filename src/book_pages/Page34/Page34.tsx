import { useSideText } from 'activeBook-core/hooks/effects/side/text';
import { ModalDialog } from 'activeBook-core/components/ModalDialog';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { SideText } from 'activeBook-core/components/SideEffects/components/SideText';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

import { useModal } from './hooks';

import sideTextStyles from 'activeBook-core/components/SideEffects/components/SideText/SideText.scss';

export const Page34 = () => {
  const { modalIsActive, modalOnClose } = useModal();

  const SideTextTemplate = (
    <SideText>
      <>
        <span className={sideTextStyles.error}>
              целостность обшивки: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              температура: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              пульс: не обнаружен. таблетки уже не помогут!;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              информация о маршруте: до конца маршрута осталось 300 метров. выходя из машины не забудьте личные вещи;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              статус кофе: [ОШИБКА]
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              статус элементов питания: элементы питания заряжены на [ОШИБКА], разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              напоминание: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              sudo: команда sudo не найдена
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
              8 800 555 35 35 - проще позвонить, чем у кого-то занимать!
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              не думаю, что это кто-то будет читать, поэтому тут особо пасхалок и не стал пихать
        </span>

        <span>
              но если ты читаешь - то должно быть ты неплохой фронтенд-разработчик. снимаю шляпу
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>

      <>
        <span className={sideTextStyles.error}>
              целостность обшивки: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              температура: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              пульс: не обнаружен. таблетки уже не помогут!;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              информация о маршруте: до конца маршрута осталось 300 метров. выходя из машины не забудьте личные вещи;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              статус кофе: [ОШИБКА]
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              статус элементов питания: элементы питания заряжены на [ОШИБКА], разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              напоминание: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              sudo: команда sudo не найдена
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
              8 800 555 35 35 - проще позвонить, чем у кого-то занимать!
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              не думаю, что это кто-то будет читать, поэтому тут особо пасхалок и не стал пихать
        </span>

        <span>
              но если ты читаешь - то должно быть ты неплохой фронтенд-разработчик. снимаю шляпу
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>
    </SideText>
  );

  useSideText({
    isActiveDefault: true,
    template: SideTextTemplate,
    speed: 5000,
  });

  const Comment = (
    <WithModal text="бесконечный белый свет," triggerType="author" mode="text">
      Белые точки по углам должны были сыграть свою важную роль для внимательных читателей прежней версии сценария,
      но здесь они остались больше как элемент декора (а может и для чего-то ещё ;))
    </WithModal>
  );

  return (
    <PageWrapper>
      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalOnClose}
        onConfirm={modalOnClose}
        onCancel={modalOnClose}
        canFullScreen={true}
        showCancelButton={false}
      >
        <div>
          <p>
            Дальше, чтобы не выжигать дорогому читателю глаза, я отключаю эффект инверсии цвета
            (актуально для тёмной темы).
          </p>
          <p>
            Но чтобы было понимание, что герой находится "по ту сторону изгороди" я буду отображать точки по углам.
          </p>
          <p>
            Больше эта модалка вас не побеспокоит
          </p>
        </div>
      </ModalDialog>

      <h1>
        Глава 6.
      </h1>
      <h2>
        По ту сторону изгороди.
      </h2>

      <p>
        Впереди по-прежнему ничего не было. Лишь {Comment} ослепляющий героя. Как будто самым мощным
        прожектором светили прямо в лицо.
      </p>
      <p>
        Поэтому, в первую очередь, Егор закрыл иллюминаторы.
      </p>
      <p>
        Информация, поступающая на дисплеи двигалась невыносимо быстро. Её было очень много. Но толку от этого было
        мало.
      </p>
      <p>
        Охватил жуткий мандраж. Чтобы справиться с этим, путешественник закинул в рот максимально допустимую дозу
        успокоительного.
      </p>
      <p>
        «Я такими темпами наркоманом стану», — подумал Егор с досадой. Но делать нечего. Ситуация экстремальная. Он
        старался не забывать об этом.
      </p>
    </PageWrapper>
  );
};
