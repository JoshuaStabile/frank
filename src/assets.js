export const IMAGES = {
  smile: ['spr_frank_smile.png'],
  neutral: ['spr_frank_neutral.png'],
  jibjab: [
    'spr_frank_jibjab_1.png',
    'spr_frank_jibjab_2.png',
    'spr_frank_jibjab_3.png',
    'spr_frank_jibjab_4.png',
  ],
};

export function getImagePath(file) {
  return `/local/frank/${file}`;
}