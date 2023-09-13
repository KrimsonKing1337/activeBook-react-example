import { useDispatch, useSelector } from 'activeBook-core/store';
import classNames from 'classnames';
import { configActions, configSelectors } from 'activeBook-core/store/config';
import { getNewValueForNarrativeTextStyle } from 'activeBook-core/utils/styles/getNewValueForNarrativeTextStyle';

import { Label } from 'components/Label';

import styles from './LineHeight.scss';

function getClassNames(className: string) {
  return classNames([
    styles.item,
    className,
  ]);
}

export const LineHeight = () => {
  const dispatch = useDispatch();
  const lineHeight = useSelector(configSelectors.lineHeight);

  const dispatchSetLineHeight = (isMoreAction: boolean) => {
    const lineHeightNewValue = getNewValueForNarrativeTextStyle(lineHeight, isMoreAction);

    if (lineHeightNewValue === lineHeight) {
      return;
    }

    dispatch(configActions.setLineHeight(lineHeightNewValue));
  };

  const minusClickHandler = () => {
    dispatchSetLineHeight(false);
  };

  const plusClickHandler = () => {
    dispatchSetLineHeight(true);
  };

  const currentValueLabel = `${lineHeight}%`;

  return (
    <div className={styles.lineHeight}>
      <Label label="Межстрочный интервал" />

      <div className={styles.itemsWrapper}>
        <div className={getClassNames(styles.isMinus)} onClick={minusClickHandler}>
          -
        </div>

        <div className={getClassNames(styles.isValue)}>
          {currentValueLabel}
        </div>

        <div className={getClassNames(styles.isPlus)} onClick={plusClickHandler}>
          +
        </div>
      </div>
    </div>
  );
};
