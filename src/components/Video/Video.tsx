import React from 'react';

type VideoProps = {
  [key: string]: any;
  className?: string;
  src: string;
};

export const Video = ({ className = '', src, ...etc }: VideoProps) => {
  return (
    <div className={className}>
      <video src={src} preload="auto" poster="/assets/img/poster-default.png" {...etc} />
    </div>
  );
};
