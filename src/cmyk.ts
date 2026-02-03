import { hexToRgb } from "./rbg.ts";
import type { Cymk } from "./vars.ts";

export const toCymk = (hex: string): Cymk => {
  const { red, green, blue } = hexToRgb(hex);

  const Val = 255;

  const red1 = red / Val;
  const green1 = green / Val;
  const blue1 = blue / Val;

  const k = 1 - Math.max(red1, green1, blue1);

  return {
    cyan: (1 - red1 - k) / (1 - k),
    magenta: (1 - green1 - k) / (1 - k),
    yellow: (1 - blue1 - k) / (1 - k),
    black: k,
  };
};
