import { useDispatch } from 'activeBook-core/store';
import { effectsActions } from 'activeBook-core/store/effects/common';

import { Toggle } from 'components/Toggle';

export const Dots = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectsActions.setDotsActiveState(value));
  };

  return (
    <Toggle
      label="Точки по углам"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
