import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@types';

import { configActions, configSelectors } from 'store/config';

import { Label } from 'components/Label';
import { Spoiler } from 'components/Spoiler';

import { getIsMobile } from 'utils/mobile/getIsMobile';

import { getClassNames, playAchievement, themes } from './utils';

import styles from './Themes.scss';

const isMobile = getIsMobile();

export const Themes = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(configSelectors.theme);

  const clickHandler = (theme: Theme) => {
    dispatch(configActions.setTheme(theme));

    playAchievement();
  };

  return (
    <div className={styles.themes}>
      <Label label="Оформление" />

      <div className={styles.themesItemsWrapper}>
        {themes.map((themeCur) => (
          <div key={themeCur} className={getClassNames(themeCur)} onClick={() => clickHandler(themeCur)}>
            {activeTheme === themeCur && <FontAwesomeIcon icon={faCheck} />}
          </div>
        ))}
      </div>

      {isMobile && (
        <Spoiler label="Внимание" className={styles.spoiler}>
          В приложениях, собранных через cordova почему-то некорректно меняются цвета.
          При этом, если открыть через браузер - то всё нормально.
          Так и не смог найти причину.
          Просьба в случае проблем использовать тему по умолчанию.
          Спасибо за понимание
        </Spoiler>
      )}
    </div>
  );
};
