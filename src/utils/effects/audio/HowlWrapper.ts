import { Howl, HowlOptions } from 'howler';
import { store } from 'store';

type AudioType = 'oneShot' | 'loop' | undefined;

type HowlWrapperOptions = {
  src: HowlOptions['src'],
  loop?: HowlOptions['loop'],
  type?: AudioType;
  range?: {
    from: number;
    to: number;
  }
};

type HowlerOptions = {
  src: HowlOptions['src'],
  loop?: HowlOptions['loop'],
  volume?: HowlOptions['volume'],
};

export class HowlWrapper {
  private static fadeDurationDefault = 1000;

  public readonly howlInst: Howl;
  public src: HowlOptions['src'] = '';
  public isUnloading = false;
  public isPlaying = false;
  public type: AudioType = undefined;
  public range: HowlWrapperOptions['range'] = undefined;

  constructor({ src, loop, range, type }: HowlWrapperOptions) {
    const storeState = store.getState();
    const { volume } = storeState;

    const options: HowlerOptions = {
      src,
      loop,
      volume: volume.other / 100,
    };

    if (loop) {
      options.volume = volume.bg / 100;
    }

    this.howlInst = new Howl(options);

    this.src = src;
    this.range = range;
    this.type = type;
  }

  volume(n: number) {
    this.howlInst.volume(n);
  }

  async play(withFadeIn = false) {
    this.isPlaying = true;

    if (withFadeIn) {
      await this.fadeIn();
    }

    return new Promise<void>((resolve) => {
      this.howlInst.once('end', () => {
        this.isPlaying = false;

        resolve();
      });

      this.howlInst.play();
    });
  }

  async pause(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.howlInst.pause();

    this.isPlaying = false;
  }

  async stop(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.howlInst.stop();

    this.isPlaying = false;
  }

  async unload(withFadeOut = false) {
    this.isUnloading = true;

    if (withFadeOut) {
      await this.fadeOut();
    }

    this.howlInst.unload();

    this.isPlaying = false;
  }

  fade(from: number, to: number, dur: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, dur);

      this.howlInst.fade(from, to, HowlWrapper.fadeDurationDefault);
    });
  }

  async fadeIn() {
    await this.fade(0, 100, HowlWrapper.fadeDurationDefault);

    return this.howlInst;
  }

  async fadeOut() {
    await this.fade(100, 0, HowlWrapper.fadeDurationDefault);

    return this.howlInst;
  }

  playing() {
    return this.howlInst.playing();
  }

  state() {
    return this.howlInst.state();
  }

  waitTillTheEnd() {
    return new Promise<void>((resolve) => {
      if (this.isPlaying) {
        const interval = setInterval(() => {
          if (!this.isPlaying) {
            clearInterval(interval);

            resolve();
          }
        }, 10);
      } else {
        resolve();
      }
    });
  }
}
