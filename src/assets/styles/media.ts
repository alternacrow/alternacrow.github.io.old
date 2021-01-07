const MEDIA_MAX_SIZE = {
  sp: 480,
  tab: 896,
};

export const media = {
  sp: `@media screen and (max-width: ${MEDIA_MAX_SIZE.sp}px)`,
  tab: `@media screen and (min-width: ${
    MEDIA_MAX_SIZE.sp + 1
  }px) and (max-width: ${MEDIA_MAX_SIZE.tab}px)`,
  pc: `@media screen and (min-width: ${MEDIA_MAX_SIZE.tab + 1}px)`,
} as const;

export const vw = (pixel: number, mediaPixel = 375) =>
  `${(pixel / mediaPixel) * 100}vw`;
