import React, { PropsWithChildren } from 'react';

import styles from './Item.scss';

export const Item = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.item}>
      {children}
    </div>
  );
};
