import React from 'react';

import styles from './Item.scss';

export type ItemProps = {
  title: string;
  status: boolean;
};

export const Item = ({ title, status }: ItemProps) => {
  const statusLabel = status ? 'Получено' : 'В процессе';

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        { title }
      </div>

      <div className={styles.status}>
        { statusLabel }
      </div>
    </div>
  );
};
