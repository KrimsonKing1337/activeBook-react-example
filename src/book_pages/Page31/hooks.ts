import { useState } from 'react';

const localStorageFlag = 'modalWithCommentsAboutInverseColorWasShowed';

export function useModal() {
  const initValue = !localStorage.getItem(localStorageFlag);

  const [modalIsActive, setModalIsActive] = useState(initValue);

  const modalOnClose = () => {
    setModalIsActive(false);

    localStorage.setItem(localStorageFlag, JSON.stringify(true));
  };

  return { modalIsActive, modalOnClose };
}
