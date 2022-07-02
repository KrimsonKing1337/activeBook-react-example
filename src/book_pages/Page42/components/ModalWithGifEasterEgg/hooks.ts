import { useState } from 'react';

export const useModalWithGifEasterEgg = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  return {
    modalIsActive,
    setModalIsActive,
  };
};
