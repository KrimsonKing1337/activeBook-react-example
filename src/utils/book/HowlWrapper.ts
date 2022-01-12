import { Howl, HowlOptions } from 'howler';

type HowlWrapperOptions = {
  src: HowlOptions['src'],
  loop?: HowlOptions['loop'],
};

export class HowlWrapper {
  private audio: Howl;

  constructor({ src, loop }: HowlWrapperOptions) {
    this.audio = new Howl({
      src,
      loop,
    });
  }

  play() {
    return new Promise<void>((resolve) => {
      this.audio.once('end', () => resolve());

      this.audio.play();
    });
  }

  unload() {
    this.audio.unload();
  }
}
