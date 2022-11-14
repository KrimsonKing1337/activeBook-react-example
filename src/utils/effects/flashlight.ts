import { store } from 'store';

import { mainActions } from 'store/main';

class Flashlight {
  private track: MediaStreamTrack | null;

  static getIsFlashlightAvailable() {
    return store.getState().main.isFlashlightAvailable;
  }

  static getIsTorchSupported(capabilities: any) {
    return capabilities.torch || (
      'fillLightMode' in capabilities &&
      capabilities.fillLightMode.length !== 0 &&
      capabilities.fillLightMode !== 'none'
    );
  }

  static initCordovaFlashlight(cordovaFlashlight: any) {
    cordovaFlashlight.available((isAvailable: boolean) => {
      const state = isAvailable ? 'cordova' : false;

      store.dispatch(mainActions.setIsFlashlightAvailable(state));
    });
  }

  constructor() {
    this.track = null;
  }

  torchControl(state: boolean) {
    if (!this.track) {
      return;
    }

    this.track.applyConstraints({
      advanced: [{
        torch: state,
      }],
    });
  }

  // https://stackoverflow.com/a/70228940
  async torchInit() {
    if (!navigator.mediaDevices) {
      console.log('no navigator.mediaDevices');

      return;
    }

    const devices = await navigator.mediaDevices.enumerateDevices();

    const cameras = devices.filter((device) => device.kind === 'videoinput');

    if (cameras.length === 0) {
      console.log('no camera found on this device');

      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
      },
    });

    this.track = stream.getVideoTracks()[0];

    const imageCapture = new ImageCapture(this.track);

    const capabilities = await imageCapture.getPhotoCapabilities() as any;

    const torchSupported = Flashlight.getIsTorchSupported(capabilities);

    if (!torchSupported) {
      console.log('no torch found');

      return;
    }

    store.dispatch(mainActions.setIsFlashlightAvailable('js'));
  }

  init() {
    const cordovaFlashlight = (window as any).plugins?.flashlight;

    if (cordovaFlashlight) {
      Flashlight.initCordovaFlashlight(cordovaFlashlight);
    } else {
      this.torchInit();
    }
  }

  on() {
    const flashLightAvailableState = Flashlight.getIsFlashlightAvailable();

    if (!flashLightAvailableState) {
      return;
    }

    if (flashLightAvailableState === 'js') {
      this.torchControl(true);
    } else if (flashLightAvailableState === 'cordova') {
      (window as any).plugins.flashlight.switchOn();
    }
  }

  off() {
    const flashLightAvailableState = Flashlight.getIsFlashlightAvailable();

    if (!flashLightAvailableState) {
      return;
    }

    if (flashLightAvailableState === 'js') {
      this.torchControl(false);
    } else if (flashLightAvailableState === 'cordova') {
      (window as any).plugins.flashlight.switchOff();
    }
  }
}

export const flashlightInst = new Flashlight();
