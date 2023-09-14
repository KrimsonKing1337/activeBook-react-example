import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'activeBook-core/store';
import classNames from 'classnames';
import { Howler } from 'howler';
import { volumeActions } from 'activeBook-core/store/volume';
import { initialState as volumeInitialState } from 'activeBook-core/store/volume/slice';
import { configActions } from 'activeBook-core/store/config';
import { initialState as configInitialState } from 'activeBook-core/store/config/slice';
import { mainActions, mainSelectors } from 'activeBook-core/store/main';
import { achievementsActions } from 'activeBook-core/store/achievements';
import { seenPages } from 'activeBook-core/utils/localStorage/seenPages';
import { play as achievementPlay } from 'activeBook-core/utils/effects/achievements';
import { achievements as achievementsUtils } from 'activeBook-core/utils/localStorage/achievements';
import { Flags as AchievementsFlags, getInitValues } from 'activeBook-core/utils/effects/achievements/utils';
import { removeCssHover } from 'activeBook-core/utils/touch/removeCssHover';
import { flashlightInst } from 'activeBook-core/utils/effects/flashlight';
import { useEffectsInRange } from 'activeBook-core/hooks/effects/range';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';
import effectsJson from 'book_pages/effects.json';

import { Achievement } from 'components/Achievement';

import styles from './AppWrapper.scss';

export const AppWrapper = ({ children }: PropsWithChildren<unknown>) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(mainSelectors.isLoading);
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
    navigate('/');
  }, []);

  // если тач-устройство - убираю :hover
  useEffect(() => {
    removeCssHover();
  }, []);

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

  useEffectsInRange(effectsJson);

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
