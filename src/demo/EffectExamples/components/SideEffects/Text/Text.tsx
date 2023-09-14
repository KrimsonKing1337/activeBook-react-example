import { useSideText } from 'activeBook-core/hooks/effects/side/text';
import { Toggle } from 'activeBook-core/components/Toggle';
import { SideText } from 'activeBook-core/components/SideEffects/components/SideText';

import sideTextStyles from 'activeBook-core/components/SideEffects/components/SideText/SideText.scss';

export const Text = () => {
  const SideTextTemplate = (
    <SideText>
      <>
        <span>
              целостность обшивки: 99.9%;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              температура: 23 градуса по цельсию;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              пульс: повышенный, рекомендуется приём успокоительного;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              информация о маршруте: по пути следования обнаружен астероид, курс был скорректирован;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
              ваш кофе готов;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              статус элементов питания: элементы питания заряжены на 91%, разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              напоминание: доиграть партию в мини-гольф;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              sudo: в правах суперпользователя отказано, проверьте правильность вводимого пароля;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              освещение: освещение изменено в соответствии с привычным для пользователя в это время суток;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              ты правда это читаешь? ну ты котик!
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>

      <>
        <span>
              целостность обшивки: 99.9%;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              температура: 23 градуса по цельсию;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              пульс: повышенный, рекомендуется приём успокоительного;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              информация о маршруте: по пути следования обнаружен астероид, курс был скорректирован;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
              ваш кофе готов;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              статус элементов питания: элементы питания заряжены на 91%, разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
              напоминание: доиграть партию в мини-гольф;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
              sudo: в правах суперпользователя отказано, проверьте правильность вводимого пароля;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
              освещение: освещение изменено в соответствии с привычным для пользователя в это время суток;
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>
    </SideText>
  );

  const { sideTextOn, sideTextOff } = useSideText({
    isActiveDefault: false,
    template: SideTextTemplate,
  });

  const buttonClickHandler = (value: boolean) => {
    value ? sideTextOn() : sideTextOff();
  };

  return (
    <Toggle
      label="Боковой текст"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
