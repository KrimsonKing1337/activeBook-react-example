import React, { PropsWithChildren } from 'react';

import { Modal, ModalProps } from 'components/Modal';

import styles from './ModalDialog.scss';

type Func = () => void;

export type ModalDialogProps = ModalProps & {
  showOkButton?: boolean;
  showCancelButton?: boolean;
  onConfirm: Func;
  onCancel: Func;
}

const defaultFunc = () => {};

export const ModalDialog = ({
  showOkButton = true,
  showCancelButton = true,
  onClose = defaultFunc,
  onConfirm = defaultFunc,
  onCancel = defaultFunc,
  children,
  ...rest
}: PropsWithChildren<ModalDialogProps>) => {
  const buttonOkClickHandler = () => onConfirm();
  const buttonCancelClickHandler = () => onCancel();
  const closeHandler = () => {
    onCancel();
  };

  return (
    <Modal onClose={closeHandler} {...rest}>
      <div className={styles.wrapper}>
        <div className="ModalDialogDesc">
          {children}
        </div>

        <div className={styles.actions}>
          {showOkButton && (
            <button type="button" className={styles.buttonConfirm} onClick={buttonOkClickHandler}>
              Ок
            </button>
          )}

          {showCancelButton && (
            <button type="button" className={styles.buttonCancel} onClick={buttonCancelClickHandler}>
              Отмена
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};
