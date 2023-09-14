import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';
import { Toggle } from 'activeBook-core/components/Toggle';

export const Shadow = () => {
  const { sideShadowOn, sideShadowOff } = useSideShadow({
    isActiveDefault: false,
    color: 'red',
    speed: 850,
  });

  const buttonClickHandler = (value: boolean) => {
    value ? sideShadowOn() : sideShadowOff();
  };

  return (
    <Toggle
      label="Боковая тень"
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
