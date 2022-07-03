import React from 'react';

import styles from './AuthorComment.scss';

export type ActionProps = {
  children: React.ReactNode;
};

export const AuthorComment = ({ children, ...props }: ActionProps) => {
  return (
    <div className={styles.authorComment} {...props}>
      {' '}
      {children}
    </div>
  );
};
