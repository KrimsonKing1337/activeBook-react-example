import { useMusicInRange } from './audio/music';
import { useAudioInRange } from './audio/sound';
import { useDotsInRange } from './dots';

export function useEffectsInRange() {
  useMusicInRange();
  useAudioInRange();
  useDotsInRange();
}
