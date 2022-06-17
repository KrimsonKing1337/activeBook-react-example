import React from 'react';

import { Toggle } from 'components/Toggle';

import { useSideShadow } from 'hooks/effects/sideShadow';

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
      label={'Боковая тень'}
      isActiveDefault={false}
      onClickOn={() => buttonClickHandler(true)}
      onClickOff={() => buttonClickHandler(false)}
    />
  );
};
