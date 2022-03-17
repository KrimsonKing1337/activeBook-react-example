import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMenuActiveState } from 'store/main/actions';
import { setFontSize } from 'store/config/actions';
import { setIsOpen } from 'store/bookmarks/actions';
import { configSelectors } from 'store/config/selectors';

import BookmarkIcon from 'assets/img/toolbar/i-bookmark.svg';
import FontSmallIcon from 'assets/img/toolbar/i-font-small.svg';
import FontBigIcon from 'assets/img/toolbar/i-font-big.svg';
import EtcIcon from 'assets/img/toolbar/i-etc.svg';

import { getNewValueForNarrativeTextStyle } from 'utils/styles/getNewValueForNarrativeTextStyle';

import { Item } from './components/Item';
import { Nav } from './components/Nav';

import styles from './Toolbar.scss';

export type ToolbarProps = {
  sbMode?: boolean;
};

export const Toolbar = ({ sbMode }: ToolbarProps) => {
  const dispatch = useDispatch();
  const fontSize = useSelector(configSelectors.fontSize);

  const dispatchSetFontSize = (isMoreAction: boolean) => {
    const fontSizeNewValue = getNewValueForNarrativeTextStyle(fontSize, isMoreAction);

    if (fontSizeNewValue === fontSize) {
      return;
    }

    dispatch(setFontSize(fontSizeNewValue));
  };

  const bookmarkClickHandler = () => {
    dispatch(setIsOpen(true));
  };

  const etcIconClickHandler = () => {
    dispatch(setMenuActiveState('menu'));
  };

  const fontSmallClickHandler = () => {
    dispatchSetFontSize(false);
  };

  const fontBigClickHandler = () => {
    dispatchSetFontSize(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        {!sbMode && (
          <>
            <Item onClick={bookmarkClickHandler}>
              <BookmarkIcon />
            </Item>

            <Item>
              <Nav />
            </Item>
          </>
        )}

        <Item onClick={fontSmallClickHandler}>
          <FontSmallIcon />
        </Item>

        <Item className={styles.fontBig} onClick={fontBigClickHandler}>
          <FontBigIcon />
        </Item>

        <Item onClick={etcIconClickHandler}>
          <EtcIcon />
        </Item>
      </div>
    </div>
  );
};
