import { useRef, useState } from 'react';

export const useModalWithVideoEasterEgg = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return {
    modalIsActive,
    setModalIsActive,
    videoRef,
  };
};
