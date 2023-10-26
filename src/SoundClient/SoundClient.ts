import correctSound from '../assets/sound/correct.wav';
import wrongSound from '../assets/sound/error.wav';
import winSound from '../assets/sound/win.mp3';
import clickSound from '../assets/sound/click.mp3';

class SoundClient {
  private correct: HTMLAudioElement;
  private wrong: HTMLAudioElement;
  private win: HTMLAudioElement;
  private click: HTMLAudioElement;

  constructor() {
    this.correct = new Audio(correctSound);
    this.wrong = new Audio(wrongSound);
    this.win = new Audio(winSound);
    this.click = new Audio(clickSound);
  }

  playClick() {
    this.click.play();
  }

  playCorrect() {
    this.correct.play();
  }

  playWrong() {
    this.wrong.play();
  }

  playWin() {
    this.win.play();
  }
}

const soundClient = new SoundClient();
export default soundClient;
