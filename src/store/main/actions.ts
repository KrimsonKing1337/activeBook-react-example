import { store } from 'store';

import { AudioInstancesIsLoaded } from './@types';

export const setAudioInstancesIsLoaded = (payload: AudioInstancesIsLoaded) => {
  store.dispatch({ type: '@main/setAudioInstancesIsLoaded', payload });
};
