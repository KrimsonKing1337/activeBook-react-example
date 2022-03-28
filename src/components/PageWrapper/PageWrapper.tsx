import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { effectsSelectors } from 'store/effects/common/selectors';
import { mainSelectors } from 'store/main/selectors';

import { Toolbar } from 'components/Toolbar';
import { Menu } from 'components/Menu';
import { TableOfContents } from 'components/TableOfContents';
import { Bookmarks } from 'components/Bookmarks';
import { SideEffects } from 'components/SideEffects';
import { BackgroundEffects } from 'components/BackgroundEffects';

import { Narrative } from './components/Narrative';

import styles from './PageWrapper.scss';

export type PageWrapperProps = {
  children: React.ReactNode;
  withoutToolbar?: boolean;
  sbMode?: boolean;
};

export const PageWrapper = ({ children, withoutToolbar, sbMode }: PageWrapperProps) => {
  const inverseColorIsActive = useSelector(effectsSelectors.inverseColorIsActive);
  const isLoading = useSelector(mainSelectors.isLoading);

  const pageWrapperClassNames = classNames({
    [styles.pageWrapper]: true,
    [styles.inverseColorIsActive]: inverseColorIsActive,
  });

  const mainContendClassNames = classNames({
    [styles.mainContent]: true,
    [styles.isLoading]: isLoading,
  });

  return (
    <div className={pageWrapperClassNames}>
      <div className={mainContendClassNames}>
        <Narrative>
          {children}
        </Narrative>

        <SideEffects />

        <BackgroundEffects />

        {!withoutToolbar && (
          <Toolbar sbMode={sbMode} />
        )}

        <Menu />

        <TableOfContents />

        <Bookmarks />
      </div>
    </div>
  );
};
