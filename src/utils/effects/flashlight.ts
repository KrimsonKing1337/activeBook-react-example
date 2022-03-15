export function on() {
  console.log('___ FLASH');

  return;

  (window as any).plugins.flashlight.switchOn();
}

export function off() {
  console.clear();

  return;

  (window as any).plugins.flashlight.switchOff();
}
