import React from 'react';

import { ModalDialog } from 'components';

import { PageWrapper } from 'components/PageWrapper';

import { useModal } from './hooks';

export const Page31 = () => {
  const { modalIsActive, modalOnClose } = useModal();

  return (
    <PageWrapper>
      <ModalDialog
        isOpen={modalIsActive}
        onClose={modalOnClose}
        onConfirm={modalOnClose}
        onCancel={modalOnClose}
        hideExpandButton={true}
        showCancelButton={false}
      >
        <div>
          <p>
            Дальше, чтобы не выжигать дорогому читателю глаза, я отключаю эффект инверсии цвета
            (актуально для тёмной темы).
          </p>
          <p>
            Но чтобы было понимание, что герой находится "по ту сторону изгороди" я буду отображать точки по углам.
          </p>
          <p>
            Больше эта модалка вас не побеспокоит
          </p>
        </div>
      </ModalDialog>

      <p>
        Здесь будет продолжение.
      </p>
    </PageWrapper>
  );
};
