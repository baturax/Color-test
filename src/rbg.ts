import { type Rgb, regex } from "./vars.ts";

export const hexToRgb = (hex: string): Rgb => {
  const local = hex.trim().replace(regex, "");

  return {
    red: Number.parseInt(local.slice(0, 2), 16),
    green: Number.parseInt(local.slice(2, 4), 16),
    blue: Number.parseInt(local.slice(4, 6), 16),
  };
};
