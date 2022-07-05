import React from 'react';

import styles from './AuthorComment.scss';

export type ActionProps = {
  [name: string]: any;
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
