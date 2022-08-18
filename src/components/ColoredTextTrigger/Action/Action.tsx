import React, { PropsWithChildren } from 'react';

import classNames from 'classnames';

import styles from './Action.scss';

export type ActionProps = {
  fullWidth?: boolean;
  [name: string]: any;
};

export const Action = ({ children, fullWidth = false, ...props }: PropsWithChildren<ActionProps>) => {
  const actionClassNames = classNames({
    [styles.action]: true,
    [styles.isFullWidth]: fullWidth,
  });

  return (
    <div className={actionClassNames} {...props}>
      {' '}
      {children}
    </div>
  );
};
