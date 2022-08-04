import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Hammer from 'hammerjs';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

const IS_OPEN = '#/modal';
const IS_CLOSE = '';

type Func = () => void;

type ModalMode = 'media' | 'text';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onOpen?: Func;
  onClose?: Func;
  mode?: ModalMode;
  canFullScreen?: boolean;
  canCrop?: boolean;
};

export const Modal = ({
  children,
  onClose,
  isOpen,
  mode = 'text',
  canFullScreen = false,
  canCrop = false,
}: ModalProps) => {
  const history = useHistory();
  const { pathname } = useLocation();

  // здесь реф-версии нужны для хаммера, обычные для того чтобы ре-рендер срабатывал
  const isFullScreenRef = useRef(false);
  const isCropRef = useRef(true);
  const isZoomingRef = useRef(false);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isCrop, setIsCrop] = useState(true);
  const [componentUuid, setComponentUuid] = useState('');
  const [prevLocationPath, setPrevLocationPath] = useState(IS_CLOSE);

  const overflowRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iconCloseRef = useRef<HTMLDivElement>(null);
  const iconExpandRef = useRef<HTMLDivElement>(null);
  const iconCompressRef = useRef<HTMLDivElement>(null);
  const iconCropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const uuidValue = uuidv4();

    setComponentUuid(uuidValue);
  }, []);

  /*
  * todo: мне кажется, я тут какую-то костыльную хрень придумал.
  *  эта штука будет срабатывать каждый раз, когда меняется pathname по всему приложению.
  *  и так по всех компонентах, где я использую похожую логику:
  *  Menu, TableOfContents, Bookmarks.
  *  разобраться как сделать нормально, если это возможно (посмотреть в сторону Switch у Router)
  * */
  useEffect(() => {
    if (!componentUuid) {
      return;
    }

    if (!prevLocationPath.includes(componentUuid) && !pathname.includes(componentUuid)) {
      return;
    }

    if (prevLocationPath !== pathname) {
      if (pathname === IS_CLOSE) {
        close();
      }

      setPrevLocationPath(pathname);
    }
  }, [pathname]);

  const escPressHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      document.removeEventListener('keydown', escPressHandler);

      return;
    }

    const path =`${IS_OPEN}/${componentUuid}`;

    history.push(path);

    document.addEventListener('keydown', escPressHandler);
  }, [isOpen]);

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    const wrapperWidth = wrapperRef.current.clientWidth;

    const applyStyleLeftForElement = (element: HTMLDivElement) => {
      element.style.left = `${wrapperWidth}px`;
    };

    const iconClose = iconCloseRef.current;
    const iconExpand = iconExpandRef.current;
    const iconCompress = iconCompressRef.current;
    const iconCrop = iconCropRef.current;

    if (!iconClose || !iconExpand || !iconCompress || !iconCrop) {
      return;
    }

    const arr = [iconClose, iconExpand, iconCompress, iconCrop];

    arr.forEach((cur) => applyStyleLeftForElement(cur));
  }, [isOpen]);

  useEffect(() => {
    if (!overflowRef.current) {
      return;
    }

    const hammertime = new Hammer(overflowRef.current);

    hammertime.get('tap').set({
      taps: 2,
    });

    hammertime.get('pinch').set({
      enable: true,
      threshold: 0.5,
    });

    hammertime.on('tap', doubleTapHandler);
    hammertime.on('pinchout', zoomInHandler);
    hammertime.on('pinchin', zoomOutHandler);

    hammertime.on('pinchend pinchcancel', () => {
      isZoomingRef.current = false;
    });

    return () => {
      isZoomingRef.current = false;

      hammertime.off('tap');
      hammertime.off('pinch');
      hammertime.destroy();
    };
  }, []);

  const close = () => {
    const locationWithoutHash = {
      ...history.location,
      hash: '',
    };

    history.push(locationWithoutHash);

    if (onClose) {
      onClose();
    }
  };

  const closeIconClickHandler = () => close();
  const overflowClickHandler = () => close();

  const doubleTapHandler = () => {
    if (canFullScreen) {
      return;
    }

    isFullScreenRef.current = !isFullScreenRef.current;
    setIsFullScreen(isFullScreenRef.current);
  };

  const zoomInHandler = () => {
    if (!isFullScreenRef.current) {
      isZoomingRef.current = true;

      isFullScreenRef.current = true;
      setIsFullScreen(true);

      return;
    }

    if (!isZoomingRef.current) {
      isCropRef.current = true;
      setIsCrop(true);
    }
  };

  const zoomOutHandler = () => {
    if (isCropRef.current) {
      isZoomingRef.current = true;

      isCropRef.current = false;
      setIsCrop(false);

      return;
    }

    if (!isZoomingRef.current) {
      isFullScreenRef.current = false;
      setIsFullScreen(false);
    }
  };

  const iconExpandClickHandler = () => {
    isFullScreenRef.current = true;
    setIsFullScreen(true);
  };

  const iconCompressClickHandler = () => {
    isFullScreenRef.current = false;
    setIsFullScreen(false);
  };

  const iconCropClickHandler = () => {
    isCropRef.current = !isCropRef.current;
    setIsCrop(!isCrop);
  };

  const isMediaMode = mode === 'media';

  const overflowClassNames = classNames({
    [styles.overflow]: true,
    [styles.isOpen]: isOpen,
  });

  const modalClassNames = classNames({
    [styles.modal]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
  });

  const iconExpandClassNames = classNames({
    [styles.iconExpand]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isHidden]: !canFullScreen,
  });

  const iconCloseClassNames = classNames({
    [styles.iconClose]: true,
    [styles.isMediaMode]: isMediaMode,
    [styles.isFullScreen]: isFullScreen,
  });

  const iconCompressClassNames = classNames({
    [styles.iconCompress]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
  });

  const iconCropClassNames = classNames({
    [styles.iconCrop]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isHidden]: !canCrop,
  });

  const contentClassNames = classNames({
    [styles.content]: true,
    [styles.isFullScreen]: isFullScreen,
    [styles.isMediaMode]: isMediaMode,
    [styles.isCrop]: isCrop,
  });

  return (
    <div ref={overflowRef} className={overflowClassNames} onClick={overflowClickHandler}>
      <div ref={wrapperRef} className={modalClassNames}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className="modalToolbar">
            <div ref={iconCloseRef} className={iconCloseClassNames} onClick={closeIconClickHandler}>
              <FontAwesomeIcon icon={faTimes} />
            </div>

            <div ref={iconExpandRef} className={iconExpandClassNames} onClick={iconExpandClickHandler}>
              <FontAwesomeIcon icon={faExpand} />
            </div>

            <div ref={iconCompressRef} className={iconCompressClassNames} onClick={iconCompressClickHandler}>
              <FontAwesomeIcon icon={faCompress} />
            </div>

            <div ref={iconCropRef} className={iconCropClassNames} onClick={iconCropClickHandler}>
              <FontAwesomeIcon icon={faCrop} />
            </div>
          </div>

          <div className={contentClassNames}>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
};
