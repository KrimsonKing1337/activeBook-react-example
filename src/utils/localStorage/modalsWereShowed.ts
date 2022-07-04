const key = 'modalsWereShowed';

enum Flags {
  usingCamera = 'usingCamera',
  inverseColor = 'inverseColor',
}

function get(name: Flags) {
  const modalsAsJson = localStorage.getItem('modalsWereShowed');

  if (!modalsAsJson) {
    return false;
  }

  const modals = JSON.parse(modalsAsJson);

  return modals[name];
}

function set(name: Flags, value: boolean) {
  const values = localStorage.getItem('modalsWereShowed');

  let modals = {
    [Flags.usingCamera]: false,
    [Flags.inverseColor]: false,
  };

  if (values) {
    modals = JSON.parse(values);
  }

  modals[name] = value;

  const modalsAsJson = JSON.stringify(modals);

  localStorage.setItem(key, modalsAsJson);
}

export const modalsWereShowed = {
  set,
  get,
  Flags,
  key,
};
