import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { goToPage } from 'utils/goToPage';

import styles from './Item.scss';

export type ItemProps = {
  pageNumber: number;
  onDelete: (bookmark: number) => any;
};

export const Item = ({ pageNumber, onDelete }: ItemProps) => {
  function clickHandler() {
    goToPage(pageNumber);
  }

  function deleteIconClickHandler(e: React.MouseEvent) {
    e.stopPropagation();

    onDelete(pageNumber);
  }

  return (
    <div className={styles.item} onClick={clickHandler}>
      <div className={styles.pageNumber}>
        Страница { pageNumber }
      </div>

      <div className={styles.deleteIcon} onClick={deleteIconClickHandler}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};
