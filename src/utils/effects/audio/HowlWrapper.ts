import { Howl, HowlOptions } from 'howler';

type HowlWrapperOptions = {
  src: HowlOptions['src'],
  loop?: HowlOptions['loop'],
  range?: {
    from: number;
    to: number;
  }
};

export class HowlWrapper {
  private static fadeDurationDefault = 1000;

  public readonly howlInst: Howl;
  public isUnloading = false;
  public isPlaying = false;
  public range: HowlWrapperOptions['range'] = undefined;

  constructor({ src, loop, range }: HowlWrapperOptions) {
    this.howlInst = new Howl({
      src,
      loop,
    });

    this.range = range;
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
