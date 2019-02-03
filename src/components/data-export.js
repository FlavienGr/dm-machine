import SoundQ from "../assets/conga-rub-hit.mp3";
import SoundW from "../assets/conga.mp3";
import SoundE from "../assets/conga2.mp3";
import SoundA from "../assets/conga_clean.mp3";
import SoundS from "../assets/conga_clean_high.mp3";
import SoundD from "../assets/conga_clean_higher.mp3";
import SoundZ from "../assets/conga_clean_low.mp3";
import SoundX from "../assets/conga_clean_lower.mp3";
import SoundC from "../assets/conga_clean_lowest.mp3";

export const musicData = [
  {
    keyTrigger: "Q",
    sound: SoundQ,
    keyCode: 81,
    triggerName: "conga-rub-hit"
  },
  {
    keyTrigger: "W",
    sound: SoundW,
    keyCode: 87,
    triggerName: "conga"
  },
  {
    keyTrigger: "E",
    sound: SoundE,
    keyCode: 69,
    triggerName: "conga2"
  },
  {
    keyTrigger: "A",
    sound: SoundA,
    keyCode: 65,
    triggerName: "conga-clean"
  },
  {
    keyTrigger: "S",
    sound: SoundS,
    keyCode: 83,
    triggerName: "conga-clean-high"
  },
  {
    keyTrigger: "D",
    sound: SoundD,
    keyCode: 68,
    triggerName: "conga-clean-higher"
  },
  {
    keyTrigger: "Z",
    sound: SoundZ,
    keyCode: 90,
    triggerName: "conga-clean-low"
  },
  {
    keyTrigger: "X",
    sound: SoundX,
    keyCode: 88,
    triggerName: "conga-clean-lower"
  },
  {
    keyTrigger: "C",
    sound: SoundC,
    keyCode: 67,
    triggerName: "conga-clean-lowest"
  }
];
