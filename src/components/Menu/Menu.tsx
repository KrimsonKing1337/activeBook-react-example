import React from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main';

import { Overflow } from 'components/Overflow';
import { Header } from 'components/Header';

import { achievements as achievementsLocalStorage, Flags } from 'utils/localStorage/achievements';

import { Volume } from './components/Volume';
import { Themes } from './components/Themes';
import { Vibration } from './components/Vibration';
import { Flashlight } from './components/FlashLight';
import { AuthorComments } from './components/AuthorComments';
import { LineHeight } from './components/LineHeight';
import { Footer } from './components/Footer';

export const Menu = () => {
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  // const backgroundVideoIsActive = useSelector(effectsSelectors.backgroundVideoIsActive);

  const allPagesSeen = achievementsLocalStorage.get(Flags.allPagesSeen);

  const isOpen = menuActiveState === 'menu';

  return (
    <Overflow isOpen={isOpen}>
      <Header label={'Настройки'} />

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
