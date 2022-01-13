import { Howl, HowlOptions } from 'howler';

type HowlWrapperOptions = {
  src: HowlOptions['src'],
  loop?: HowlOptions['loop'],
};

export class HowlWrapper {
  private readonly audio: Howl;
  private static fadeDurationDefault = 1000;

  constructor({ src, loop }: HowlWrapperOptions) {
    this.audio = new Howl({
      src,
      loop,
    });
  }

  async play(withFadeIn = false) {
    if (withFadeIn) {
      await this.fadeIn();
    }

    return new Promise<void>((resolve) => {
      this.audio.once('end', () => resolve());

      this.audio.play();
    });
  }

  async pause(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.audio.pause();
  }

  async stop(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.audio.stop();
  }

  async unload(withFadeOut = false) {
    if (withFadeOut) {
      await this.fadeOut();
    }

    this.audio.unload();
  }

  fade(from: number, to: number, dur: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, dur);

      this.audio.fade(from, to, HowlWrapper.fadeDurationDefault);
    });
  }

  async fadeIn() {
    await this.fade(0, 100, HowlWrapper.fadeDurationDefault);

    return this.audio;
  }

  async fadeOut() {
    await this.fade(100, 0, HowlWrapper.fadeDurationDefault);

    return this.audio;
  }
}
