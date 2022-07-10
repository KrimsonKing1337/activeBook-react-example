import React from 'react';
import { useSelector } from 'react-redux';

import { achievementsSelectors } from 'store/achievements';
import { configSelectors } from 'store/config';

import styles from './AuthorComment.scss';

export type ActionProps = {
  [name: string]: any;
  children: React.ReactNode;
};

export const AuthorComment = ({ children, ...props }: ActionProps) => {
  const achievements = useSelector(achievementsSelectors.achievements);
  const authorCommentsIsOn = useSelector(configSelectors.authorComments);

  const allPagesSeen = achievements?.allPagesSeen;
  const showComment = allPagesSeen && authorCommentsIsOn;

  return showComment ? (
    <div className={styles.authorComment} {...props}>
      {' '}
      {children}
    </div>
  ) :
    <>
      {children}
    </>;
};
