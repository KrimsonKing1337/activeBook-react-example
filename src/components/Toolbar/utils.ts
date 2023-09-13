import { play } from 'activeBook-core/utils/effects/achievements';
import { Flags } from 'activeBook-core/utils/effects/achievements/utils';

export const playAchievement = () => {
  play({
    id: Flags.fontSize,
    text: 'Играем со шрифтами!',
  });
};
