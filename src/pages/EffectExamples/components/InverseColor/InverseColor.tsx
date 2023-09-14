import { useDispatch } from 'activeBook-core/store';
import { effectsActions } from 'activeBook-core/store/effects/common';
import { Toggle } from 'activeBook-core/components/Toggle';

export const InverseColor = () => {
  const dispatch = useDispatch();

  const buttonClickHandler = (value: boolean) => {
    dispatch(effectsActions.setInverseColorActiveState(value));
  };

  return (
    <Toggle
      label="Инверсия цвета"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
