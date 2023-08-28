import React, { PropsWithChildren } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Hammer from 'hammerjs';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress, faCrop, faExpand, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Modal.scss';

const IS_OPEN_HASH = '#/modal';
const IS_CLOSE_HASH = '';

type Func = () => void;

type ModalMode = 'media' | 'text';

export type ModalProps = {
  isOpen: boolean;
  onOpen?: Func;
  onClose?: Func;
  mode?: ModalMode;
  hideExpandButton?: boolean;
  hideCropButton?: boolean;
};

type Props = RouteComponentProps & ModalProps;

type ModalState = {
  componentUuid: string;
  isFullScreen: boolean;
  isCrop: boolean;
  prevLocationHash: string;
  isZooming: boolean;
};

type DefaultProps = {
  mode: ModalMode;
  hideExpandButton: boolean;
  hideCropButton: boolean;
};

class ModalComponent extends React.Component<PropsWithChildren<Props>, ModalState> {
  static defaultProps: DefaultProps = {
    mode: 'text',
    hideExpandButton: false,
    hideCropButton: false,
  };

  private hammertime: HammerManager | null;

  private readonly overflowRef: React.RefObject<HTMLDivElement>;
  private readonly wrapperRef: React.RefObject<HTMLDivElement>;
  private readonly iconCloseRef: React.RefObject<HTMLDivElement>;
  private readonly iconExpandRef: React.RefObject<HTMLDivElement>;
  private readonly iconCompressRef: React.RefObject<HTMLDivElement>;
  private readonly iconCropRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.overflowRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.iconCloseRef = React.createRef();
    this.iconExpandRef = React.createRef();
    this.iconCompressRef = React.createRef();
    this.iconCropRef = React.createRef();

    this.hammertime = null;

    this.state = {
      componentUuid: '',
      isFullScreen: false,
      isCrop: false,
      prevLocationHash: IS_CLOSE_HASH,
      isZooming: false,
    };
  }

  componentDidMount() {
    this.setUuid();
    this.initHammer();

    document.addEventListener('keydown', this.escPressHandler);
  }

  componentWillUnmount() {
    this.destroyHammer();

    document.removeEventListener('keydown', this.escPressHandler);
  }

  componentDidUpdate(prevProps: Props) {
    const { isOpen, location, onOpen } = this.props;
    const { hash } = location;

    if (isOpen !== prevProps.isOpen && isOpen) {
      this.setStyleLeftForIcons();
      this.setHistory();

      if (onOpen) {
        onOpen();
      }
    }

    if (hash !== prevProps.location.hash) {
      this.navigatorBackHandler();
    }

    // для случаев, если закрытие модалки происходит не по нажатию на крестик или области вокруг
    if (isOpen !== prevProps.isOpen && !isOpen) {
      if (location.hash) {
        this.close();
      }
    }
  }

  initHammer = () => {
    const { current } = this.overflowRef;

    if (!current) {
      return;
    }

    this.hammertime = new Hammer(current);

    this.hammertime.get('tap').set({
      taps: 2,
    });

    this.hammertime.get('pinch').set({
      enable: true,
      threshold: 0.5,
    });

    this.hammertime.on('tap', this.doubleTapHandler);
    this.hammertime.on('pinchout', this.zoomInHandler);
    this.hammertime.on('pinchin', this.zoomOutHandler);
    this.hammertime.on('pinchend pinchcancel', () => this.setState({ isZooming: false }));
  };

  destroyHammer = () => {
    this.setState({ isZooming: false });

    if (!this.hammertime) {
      return;
    }

    this.hammertime.off('tap');
    this.hammertime.off('pinch');
    this.hammertime.destroy();
  };

  setUuid = () => {
    const uuidValue = nanoid();

    this.setState({ componentUuid: uuidValue });
  };

  setHistory = () => {
    const { history } = this.props;
    const { componentUuid } = this.state;

    const path = `${IS_OPEN_HASH}/${componentUuid}`;

    history.push(path);
  }

  setStyleLeftForIcons = () => {
    const { current } = this.wrapperRef;

    if (!current) {
      return;
    }

    const wrapperWidth = current.clientWidth;

    const applyStyleLeftForElement = (element: HTMLDivElement) => {
      element.style.left = `${wrapperWidth}px`;
    };

    const iconClose = this.iconCloseRef.current;
    const iconExpand = this.iconExpandRef.current;
    const iconCompress = this.iconCompressRef.current;
    const iconCrop = this.iconCropRef.current;

    if (!iconClose || !iconExpand || !iconCompress || !iconCrop) {
      return;
    }

    const arr = [iconClose, iconExpand, iconCompress, iconCrop];

    arr.forEach((cur) => applyStyleLeftForElement(cur));
  };

  close = () => {
    const { onClose, history } = this.props;

    const locationWithoutHash = {
      ...history.location,
      hash: '',
    };

    history.push(locationWithoutHash);

    if (onClose) {
      onClose();
    }
  }

  escPressHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  overflowClickHandler = () => this.close();
  closeIconClickHandler = () => this.close();
  expandIconClickHandler = () => this.setState({ isFullScreen: true });
  compressIconClickHandler = () => this.setState({ isFullScreen: false });
  cropIconClickHandler = () => this.setState({ isCrop: !this.state.isCrop });

  zoomInHandler = () => {
    const { isFullScreen, isZooming } = this.state;

    if (!isFullScreen) {
      this.setState({
        isZooming: true,
        isFullScreen: true,
      });

      return;
    }

    if (!isZooming) {
      this.setState({ isCrop: true });
    }
  };

  zoomOutHandler = () => {
    const { isCrop, isZooming } = this.state;

    if (isCrop) {
      this.setState({
        isZooming: true,
        isCrop: false,
      });

      return;
    }

    if (!isZooming) {
      this.setState({ isFullScreen: false });
    }
  };

  doubleTapHandler = () => this.setState({ isFullScreen: !this.state.isFullScreen });

  /*
  * todo: мне кажется, я тут какую-то костыльную хрень придумал.
  *  эта штука будет срабатывать каждый раз, когда меняется pathname по всему приложению.
  *  и так по всех компонентах, где я использую похожую логику:
  *  Menu, TableOfContents, Bookmarks.
  *  разобраться как сделать нормально, если это возможно (посмотреть в сторону Switch у Router)
  * */
  navigatorBackHandler = () => {
    const { location } = this.props;
    const { componentUuid, prevLocationHash } = this.state;

    const { hash } = location;

    if (!componentUuid) {
      return;
    }

    if (!prevLocationHash.includes(componentUuid) && !hash.includes(componentUuid)) {
      return;
    }

    if (prevLocationHash !== hash) {
      if (hash === IS_CLOSE_HASH) {
        this.close();
      }

      this.setState({ prevLocationHash: hash });
    }
  };

  render() {
    const { children, isOpen, hideExpandButton, hideCropButton, mode } = this.props;
    const { isFullScreen, isCrop } = this.state;

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
      [styles.isHidden]: hideExpandButton,
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
      [styles.isHidden]: hideCropButton,
    });

    const contentClassNames = classNames({
      [styles.content]: true,
      [styles.isFullScreen]: isFullScreen,
      [styles.isMediaMode]: isMediaMode,
      [styles.isCrop]: isCrop,
    });

    return (
      <div ref={this.overflowRef} className={overflowClassNames} onClick={() => this.overflowClickHandler()}>
        <div ref={this.wrapperRef} className={modalClassNames}>
          <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className="modalToolbar">
              <div ref={this.iconCloseRef} className={iconCloseClassNames} onClick={() => this.closeIconClickHandler()}>
                <FontAwesomeIcon icon={faTimes} />
              </div>

              {/* eslint-disable-next-line max-len */}
              <div
                ref={this.iconExpandRef}
                className={iconExpandClassNames}
                onClick={() => this.expandIconClickHandler()}
              >
                <FontAwesomeIcon icon={faExpand} />
              </div>

              {/* eslint-disable-next-line max-len */}
              <div
                ref={this.iconCompressRef}
                className={iconCompressClassNames}
                onClick={() => this.compressIconClickHandler()}
              >
                <FontAwesomeIcon icon={faCompress} />
              </div>

              <div ref={this.iconCropRef} className={iconCropClassNames} onClick={() => this.cropIconClickHandler()}>
                <FontAwesomeIcon icon={faCrop} />
              </div>
            </div>

            <div className={contentClassNames}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const Modal = withRouter(ModalComponent);
