import { hexToRgb } from "./rbg.ts";
import type { Rgb } from "./vars.ts";

export const invertColor = (hex: string): Rgb => {
  const {red,green,blue} = hexToRgb(hex);

  return {
    red: 255 -red,
    green: 255-green,
    blue: 255-blue
  }
}
