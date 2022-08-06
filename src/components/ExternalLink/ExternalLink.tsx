import React from 'react';

import styles from './ExternalLink.scss';

export type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      {' '}
      {children}
    </a>
  );
};
