import { useState } from 'react';

export const useModalWithImgEasterEgg = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  return {
    modalIsActive,
    setModalIsActive,
  };
};
