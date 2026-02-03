import { hexToRgb } from "./rbg.ts";
import type { Hsv } from "./vars.ts";

export const toHsv = (hex: string): Hsv => {
  const normalizeHue = (h: number): number => ((h % 360) + 360) % 360;

  const { red, green, blue } = hexToRgb(hex);

  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const cMax = Math.max(r, g, b);
  const cMin = Math.min(r, g, b);
  const delta = cMax - cMin;

  let hue = 0;
  if (delta !== 0) {
    if (cMax === r) {
      hue = 60 * (((g - b) / delta) % 6);
    } else if (cMax === g) {
      hue = 60 * ((b - r) / delta + 2);
    } else {
      hue = 60 * ((r - g) / delta + 4);
    }
    hue = normalizeHue(hue);
  }

  let saturation = 0;
  if (cMax === 0) {
    saturation = 0;
  }

  saturation = delta / cMax;

  return {
    hue,
    saturation,
    value: cMax,
  };
};
