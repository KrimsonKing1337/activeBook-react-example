import { useMusicInRange } from './musicInRange';
import { useAudioInRange } from './audioInRange';

export function useEffectsInRange() {
  useMusicInRange();
  useAudioInRange();
}
