import { useDispatch, useSelector } from 'activeBook-core/store';
import { mainActions } from 'activeBook-core/store/main';
import { configActions, configSelectors } from 'activeBook-core/store/config';
import { bookmarksActions } from 'activeBook-core/store/bookmarks';
import { getNewValueForNarrativeTextStyle } from 'activeBook-core/utils/styles/getNewValueForNarrativeTextStyle';

import BookmarkIcon from 'assets/img/toolbar/i-bookmark.svg';
import FontSmallIcon from 'assets/img/toolbar/i-font-small.svg';
import FontBigIcon from 'assets/img/toolbar/i-font-big.svg';
import EtcIcon from 'assets/img/toolbar/i-etc.svg';

import { Item } from './components/Item';
import { Nav } from './components/Nav';
import { playAchievement } from './utils';

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

    dispatch(configActions.setFontSize(fontSizeNewValue));

    playAchievement();
  };

  const bookmarkClickHandler = () => {
    dispatch(bookmarksActions.setIsOpen(true));
  };

  const etcIconClickHandler = () => {
    dispatch(mainActions.setMenuActiveState('menu'));
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
