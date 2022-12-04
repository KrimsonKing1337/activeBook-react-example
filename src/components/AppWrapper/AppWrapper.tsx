import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';
import { Howler } from 'howler';

import { volumeActions } from 'store/volume';
import { initialState as volumeInitialState } from 'store/volume/slice';
import { configActions } from 'store/config';
import { initialState as configInitialState } from 'store/config/slice';
import { mainActions, mainSelectors } from 'store/main';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';
import { achievementsActions } from 'store/achievements';

import { Achievement } from 'components/Achievement';

import { useEffectsInRange } from 'hooks/effects/range';
import { useVibration } from 'hooks/effects/vibration';

import { seenPages } from 'utils/localStorage/seenPages';
import { play as achievementPlay } from 'utils/effects/achievements';
import { achievements as achievementsUtils } from 'utils/localStorage/achievements';
import { Flags as AchievementsFlags } from 'utils/effects/achievements/utils';
import { removeCssHover } from 'utils/touch/removeCssHover';
import { getInitValues } from 'utils/effects/achievements/utils';
import { flashlightInst } from 'utils/effects/flashlight';

import styles from './AppWrapper.scss';

export const AppWrapper = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(mainSelectors.isLoading);
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const bookmarksIsOpen = useSelector(bookmarksSelectors.isOpen);
  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);

  const { vibrationOff } = useVibration();

  // приглушаю звук, отключаю вибрацию и вспышку, если приложение скрыто
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        Howler.mute(true);

        vibrationOff();

        flashlightInst.mediaStreamTrackStop();
      } else {
        Howler.mute(false);

        flashlightInst.init();
      }
    });
  }, []);

  // сбрасываю адресную строку
  useEffect(() => {
    history.push('/');
  }, []);

  // если тач-устройство - убираю :hover
  useEffect(() => {
    removeCssHover();
  }, []);

  // todo: перенести в Menu.tsx
  // закрываю менюшки, если пользователь сделал navigator.goBack
  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (!location.hash) {
        if (menuActiveState !== null) {
          dispatch(mainActions.setMenuActiveState(null));
        }

        if (bookmarksIsOpen) {
          dispatch(bookmarksActions.setIsOpen(false));
        }
      } else {
        if (menuActiveState === 'tableOfContents' || menuActiveState === 'achievementsProgress') {
          dispatch(mainActions.setMenuActiveState(null));
        }
      }
    });

    return () => unlisten();
  }, [menuActiveState, bookmarksIsOpen]);

  useEffect(() => {
    const canVibrate = !!navigator.vibrate;

    dispatch(mainActions.setIsVibrationAvailable(canVibrate));
  }, []);

  useEffect(() => {
    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');

    const config = configAsJson ? JSON.parse(configAsJson) : configInitialState;
    const volume = volumeAsJson ? JSON.parse(volumeAsJson) : volumeInitialState;

    dispatch(configActions.setAll(config));
    dispatch(volumeActions.setAll(volume));
  }, []);

  useEffect(() => {
    let achievements = achievementsUtils.getAll();

    if (!achievements) {
      achievementsUtils.init();

      achievements = getInitValues();
    }

    dispatch(achievementsActions.setAll(achievements));
  }, []);

  useEffect(() => {
    seenPages.set(page);

    const seenPagesFromLocalStorage = seenPages.get();
    const seenPagesLength = Object.keys(seenPagesFromLocalStorage).length;

    if (seenPagesLength === pages) {
      achievementPlay({
        id: AchievementsFlags.allPagesSeen,
        text: 'Все страницы прочитаны! Теперь можно включить авторские комментарии в настройках!',
        type: 'gold',
      });
    }
  }, [page]);

  useEffect(() => {
    const listener = () => {
      if (page !== 0) {
        const pageAsJson = JSON.stringify(page);

        localStorage.setItem('lastPage', pageAsJson);
      }
    };

    window.addEventListener('beforeunload', listener);

    return () => {
      window.removeEventListener('beforeunload', listener);
    };
  }, [page]);

  useEffectsInRange();

  const appWrapperClassNames = classNames({
    [styles.appWrapper]: true,
    [styles.isLoading]: isLoading,
  });

  return (
    <>
      <div className={appWrapperClassNames}>
        {children}
      </div>

      <Achievement />
    </>
  );
};
