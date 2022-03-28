import { useDispatch } from 'react-redux';
import { ReactNode, useEffect } from 'react';

import { setActiveState, setSpeed, setTemplate } from 'store/effects/sideText/actions';
import { initialState } from 'store/effects/sideText/initialState';

export type useSideTextProps = {
  isActiveDefault?: boolean;
  template: ReactNode;
  speed?: number;
};

export function useSideText({ isActiveDefault = true, template, speed = initialState.speed }: useSideTextProps) {
  const dispatch = useDispatch();

  const on = () => {
    dispatch(setActiveState(true));
  };

  const off = () => {
    dispatch(setActiveState(false));
  };

  useEffect(() => {
    dispatch(setTemplate(template));
    dispatch(setSpeed(speed));
    dispatch(setActiveState(isActiveDefault));

    return () => {
      off();
    };
  }, []);

  return { sideTextOn: on, sideTextOff: off };
}
