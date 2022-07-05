import React, { useEffect, useState } from 'react';

import { Modal as ModalComponent, ModalProps } from 'components/Modal';
import { Action } from 'components/ColoredTextTrigger/Action';
import { AuthorComment } from 'components/ColoredTextTrigger/AuthorComment';
import { EasterEgg } from 'components/ColoredTextTrigger/EasterEgg';

export type TriggerType = 'action' | 'author' | 'egg';

export type ModalWithVideoEasterEggProps = {
  mode?: ModalProps['mode'];
  text: string;
  triggerType: TriggerType;
  children: any; // todo: убрать any
};

export const WithModal = ({
  mode,
  text,
  triggerType,
  children,
}: ModalWithVideoEasterEggProps) => {
  const [isActive, setIsActive] = useState(false);

  const getTrigger = () => {
    if (triggerType === 'author') {
      return (
        <AuthorComment onClick={() => setIsActive(true)}>
          {text}
        </AuthorComment>
      );
    }

    if (triggerType === 'egg') {
      return (
        <EasterEgg onClick={() => setIsActive(true)}>
          {text}
        </EasterEgg>
      );
    }

    return (
      <Action onClick={() => setIsActive(true)}>
        {text}
      </Action>
    );
  };

  useEffect(() => {
    if (children.type !== 'video') {
      return;
    }

    const videoRef = children.ref;

    if (!videoRef?.current) {
      return;
    }

    const video = videoRef.current;

    if (isActive) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const trigger = getTrigger();

  return (
    <>
      <ModalComponent
        isOpen={isActive}
        onClose={() => setIsActive(false)}
        mode={mode}
        hideCropButton
        hideExpandButton
      >
        {children}
      </ModalComponent>

      {trigger}
    </>
  );
};
