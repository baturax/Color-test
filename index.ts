import { Logger } from "tslog";
import { toCymk } from "./src/cmyk.ts";
import { toHsl, toHsv } from "./src/hsv.ts";
import { hexToRgb } from "./src/rbg.ts";
import { color } from "./src/vars.ts";

const logger: Logger<unknown> = new Logger();

logger.info(`\n ${color} RGB: `, hexToRgb(color));
logger.info(`\n ${color} CMYK: `, toCymk(color));
logger.info(`\n ${color} HSV: `, toHsv(color));
logger.info(`\n ${color} HSL: `, toHsl(color));
