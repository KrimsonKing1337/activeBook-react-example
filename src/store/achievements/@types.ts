import { Flags } from 'utils/localStorage/achievements';

export type Achievement = {
  name: Flags;
  value: boolean;
};

export interface State {
  isOpen: boolean;
  achievements: Record<Flags, boolean> | null;
}
