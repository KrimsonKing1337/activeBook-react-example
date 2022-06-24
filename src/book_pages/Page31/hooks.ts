import { useEffect, useState } from 'react';

const localStorageFlag = 'modalWithCommentsAboutInverseColorWasShowed';

export function useModal() {
  const initValue = !localStorage.getItem(localStorageFlag);

  const [modalIsActive, setModalIsActive] = useState(false);

  /**
   * я здесь применяю initValue, а не в useState выше,
   * потому что иначе не сработает componentDidUpdate,
   * в котором происходит применение стилей для иконок
   * и изменение адреса.
   * пока лень переделывать из-за одного случая.
   * мб позже вернусь к этому
   */
  useEffect(() => {
    if (initValue) {
      setModalIsActive(true);
    }
  }, []);

  const modalOnClose = () => {
    setModalIsActive(false);

    localStorage.setItem(localStorageFlag, JSON.stringify(true));
  };

  return { modalIsActive, modalOnClose };
}
