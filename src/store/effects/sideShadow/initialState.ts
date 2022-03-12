export interface SideShadowState {
  isActive: boolean;
  color: string;
  speed: number;
}

export const initialState: SideShadowState = {
  isActive: false,
  color: 'red',
  speed: 1000,
};
