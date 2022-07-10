import { Flags } from 'utils/localStorage/achievements';

export type Achievement = {
  name: Flags;
  value: boolean;
};

export interface State {
  achievements: Record<Flags, boolean> | null;
  length: number;
  toastBgColor: string;
}
