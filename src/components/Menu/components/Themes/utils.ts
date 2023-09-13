import classNames from 'classnames';
import { play } from 'activeBook-core/utils/effects/achievements';
import { Flags } from 'activeBook-core/utils/effects/achievements/utils';

import { Theme } from 'activeBook-core/@types';

import styles from './Themes.scss';

export function getThemeItemClassName(theme: Theme) {
  switch (theme) {
  case 'dark':
    return styles.isDark;
  case 'orange':
    return styles.isOrange;
  case 'darkBlue':
    return styles.isDarkBlue;
  case 'black':
    return styles.isBlack;
  }
}

export function getClassNames(theme: Theme) {
  const className = getThemeItemClassName(theme);

  return classNames([
    styles.themesItem,
    className,
  ]);
}

export const themes: Theme[] = ['dark', 'orange', 'darkBlue', 'black'];

export const playAchievement = () => {
  play({
    id: Flags.themes,
    text: 'Меняем тему оформления!',
  });
};
