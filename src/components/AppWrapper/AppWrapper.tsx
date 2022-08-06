import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';
import { Howler } from 'howler';

import { volumeActions, volumeSelectors } from 'store/volume';
import { configActions } from 'store/config';
import { configSelectors } from 'store/config';
import { mainActions, mainSelectors } from 'store/main';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';
import { achievementsActions } from 'store/achievements';

import { Achievement } from 'components/Achievement';

import { useEffectsInRange } from 'hooks/effects/range';

import { seenPages } from 'utils/localStorage/seenPages';
import { play as achievementPlay } from 'utils/effects/achievements';
import { achievements as achievementsUtils, Flags as AchievementsFlags } from 'utils/localStorage/achievements';
import { removeCssHover } from 'utils/touch/removeCssHover';

import styles from './AppWrapper.scss';

type AppWrapperProps = {
  children: React.ReactNode;
};

export const AppWrapper = ({ children }: AppWrapperProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const config = useSelector(configSelectors.all);
  const volume = useSelector(volumeSelectors.all);
  const isLoading = useSelector(mainSelectors.isLoading);
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const bookmarksIsOpen = useSelector(bookmarksSelectors.isOpen);
  const page = useSelector(mainSelectors.page);
  const pages = useSelector(mainSelectors.pages);
  const bookmarks = useSelector(bookmarksSelectors.bookmarks);

  // приглушаю звук, если приложение скрыто
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      Howler.mute(document.hidden);
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

    const flashlight = (window as any).plugins?.flashlight;

    if (flashlight) {
      flashlight.available((isAvailable: boolean) => {
        dispatch(mainActions.setIsFlashlightAvailable(isAvailable));
      });
    } else {
      dispatch(mainActions.setIsFlashlightAvailable(false));
    }
  }, []);

  useEffect(() => {
    const configAsJson = localStorage.getItem('config');
    const volumeAsJson = localStorage.getItem('volume');
    const achievements = achievementsUtils.getAll();

    if (!configAsJson || !volumeAsJson) {
      return;
    }

    const config = JSON.parse(configAsJson);
    const volume = JSON.parse(volumeAsJson);

    dispatch(configActions.setAll(config));
    dispatch(volumeActions.setAll(volume));
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
    /*
    * todo: записывать на каждое изменение,
    *  а не на выход из приложения.
    *  однажды можем попасть в ситуацию,
    *  что операцию просто не будет успевать срабатывать
    */
    const listener = () => {
      const configAsJson = JSON.stringify(config);
      const volumeAsJson = JSON.stringify(volume);
      const bookmarksAsJson = JSON.stringify(bookmarks);

      localStorage.setItem('config', configAsJson);
      localStorage.setItem('volume', volumeAsJson);
      localStorage.setItem('bookmarks', bookmarksAsJson);

      if (page !== 0) {
        const pageAsJson = JSON.stringify(page);

        localStorage.setItem('lastPage', pageAsJson);
      }
    };

    window.addEventListener('beforeunload', listener);
  }, [config, volume, page, bookmarks]);

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
