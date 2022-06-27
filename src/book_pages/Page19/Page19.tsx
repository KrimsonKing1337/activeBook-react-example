import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { SideText } from 'components/SideEffects/components/SideText';
import sideTextStyles from 'components/SideEffects/components/SideText/SideText.scss';

import { useSideText } from 'hooks/effects/side/text';

export const Page19 = () => {
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

  useSideText({
    isActiveDefault: true,
    template: SideTextTemplate,
  });

  return (
    <PageWrapper>
      <p>
        Огромные мониторы отображали бесконечный поток информации о пролетающих мимо объектах, состоянии корабля
        и членов экипажа (то есть, единственного члена).
      </p>
      <p>
        Как обычно — мелькало предупреждение об учащённом сердцебиении и рекомендация о приёме успокоительного.
      </p>
      <p>
        Егор хотел минимизировать свою зависимость от чего бы то ни было.
        Он и так, мол, зависит от кислорода, воды, витаминов и аминокислот, так ещё
        и на успокоительное подсесть ему предлагают. Вот уж дудки!
        Поэтому без крайней необходимости, он не употреблял подобные препараты.
        А уж тем более алкоголь и наркотики.
        Он так боялся зависимостей, что это вполне можно считать за настоящую фобию.
      </p>
    </PageWrapper>
  );
};
