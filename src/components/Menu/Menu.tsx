import React from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main';
import { achievementsSelectors } from 'store/achievements';

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
  const menuActiveState = useSelector(mainSelectors.menuActiveState);
  const achievements = useSelector(achievementsSelectors.achievements);

  const allPagesSeen = achievements?.allPagesSeen;

  const isOpen = menuActiveState === 'menu';

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
