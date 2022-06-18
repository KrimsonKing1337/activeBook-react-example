import { useMusicInRange } from './musicInRange';
import { useAudioInRange } from './soundsInRange';

export function useEffectsInRange() {
  useMusicInRange();
  useAudioInRange();
}
