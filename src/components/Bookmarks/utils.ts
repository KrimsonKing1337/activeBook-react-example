import { play } from 'utils/effects/achievements';
import { Flags } from 'utils/localStorage/achievements';

export const playAchievement = () => {
  play({
    id: Flags.bookmarks,
    text: 'Ставим закладки!',
  });
};
