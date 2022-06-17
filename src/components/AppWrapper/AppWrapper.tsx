import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { volumeActions, volumeSelectors } from 'store/volume';
import { configActions } from 'store/config';
import { configSelectors } from 'store/config';
import { mainActions, mainSelectors } from 'store/main';
import { bookmarksSelectors } from 'store/bookmarks';
import { bookmarksActions } from 'store/bookmarks';

import { Achievement } from 'components/Achievement';

import { useEffectsInRange } from 'hooks/effects/range';

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
  const bookmarks = useSelector(bookmarksSelectors.bookmarks);

  // сбрасываю адресную строку
  useEffect(() => {
    history.push('/');
  }, []);

  // закрываю модалки, если пользователь сделал navigator.goBack
  useEffect(() => {
    const unlisten = history.listen((location) => {
      if (!location.hash && menuActiveState !== null) {
        dispatch(mainActions.setMenuActiveState(null));
      }

      if (location.hash && menuActiveState === 'tableOfContents') {
        dispatch(mainActions.setMenuActiveState(null));
      }

      if (!location.hash && bookmarksIsOpen) {
        dispatch(bookmarksActions.setIsOpen(false));
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

    if (!configAsJson || !volumeAsJson) {
      return;
    }

    const config = JSON.parse(configAsJson);
    const volume = JSON.parse(volumeAsJson);

    dispatch(configActions.setAll(config));
    dispatch(volumeActions.setAll(volume));
  }, []);

  useEffect(() => {
    const listener = () => {
      const configAsJson = JSON.stringify(config);
      const volumeAsJson = JSON.stringify(volume);
      const pageAsJson = JSON.stringify(page);
      const bookmarksAsJson = JSON.stringify(bookmarks);

      localStorage.setItem('config', configAsJson);
      localStorage.setItem('volume', volumeAsJson);
      localStorage.setItem('lastPage', pageAsJson);
      localStorage.setItem('bookmarks', bookmarksAsJson);
    };

    window.addEventListener('beforeunload', listener);

    return () => window.removeEventListener('beforeunload', listener);
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
