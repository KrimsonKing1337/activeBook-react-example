let track: MediaStreamTrack | null = null;

// https://stackoverflow.com/a/70228940
export async function init() {
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

  track = stream.getVideoTracks()[0];

  const imageCapture = new ImageCapture(track);

  const capabilities = await imageCapture.getPhotoCapabilities() as any;

  const torchSupported = capabilities.torch || (
    'fillLightMode' in capabilities &&
    capabilities.fillLightMode.length !== 0 &&
    capabilities.fillLightMode !== 'none'
  );

  if (!torchSupported) {
    console.log('no torch found');

    return;
  }
}

function torchControl(state: boolean) {
  if (!track) {
    return;
  }

  track.applyConstraints({
    advanced: [{
      torch: state,
    }],
  });
}

export function on() {
  (window as any).plugins.flashlight.switchOn();
}

export function off() {
  (window as any).plugins.flashlight.switchOff();
}
