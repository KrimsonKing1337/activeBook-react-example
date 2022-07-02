import { useState } from 'react';

export const useModal = () => {
  const [modalIsActive, setModalIsActive] = useState(false);

  return {
    modalIsActive,
    setModalIsActive,
  };
};
