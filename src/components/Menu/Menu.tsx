import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { mainActions, mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';
import { bookmarksActions, bookmarksSelectors } from 'store/bookmarks';

import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { AuthorComments } from './components/AuthorComments';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

export const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const achievements = useSelector(achievementsSelectors.achievements);
  const bookmarksIsOpen = useSelector(bookmarksSelectors.isOpen);

  const allPagesSeen = achievements?.allPagesSeen;

  const isOpen = menuActiveState === 'menu';

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

  return (
    <Overflow isOpen={isOpen}>
      <Header label="Настройки" />

      <Volume />

      <Themes />

      <Vibration />

      <Flashlight />

      {allPagesSeen && <AuthorComments />}

      <LineHeight />

      <Footer />
    </Overflow>
  );
};
