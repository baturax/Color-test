export const color = "#ff0ede";

export const regex: RegExp = /^#/;

export interface Rgb {
  red: number;
  green: number;
  blue: number;
}

export interface Cymk {
  cyan: number;
  yellow: number;
  magenta: number;
  black: number;
}

export interface Hsv {
  hue: number;
  saturation: number;
  value: number;
}

export interface Hsl {
  hue: number;
  saturation: number;
  lightness: number;
}
