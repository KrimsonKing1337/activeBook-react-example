import { useEffect, useState } from 'react';

import { Flags, modalsWereShowed } from 'activeBook-core/utils/localStorage/modalsWereShowed';

export function useModal() {
  const initValue = !modalsWereShowed.get(Flags.inverseColor);

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

    modalsWereShowed.set(Flags.inverseColor, true);
  };

  return { modalIsActive, modalOnClose };
}
