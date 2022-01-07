import createEmojiRegex from "emoji-regex";

const isSurrogatePair = (codePoint: number) => codePoint > 0xffff;

const createInclusiveRange = (min: number, max: number) => (x: number) =>
  min <= x && x <= max;

// compiled from the following sources:
// - https://en.wikipedia.org/wiki/Combining_character
// - https://en.wikipedia.org/wiki/Spacing_Modifier_Letters
const combiningMarkRanges: [number, number][] = [
  [0x02b0, 0x02ff],
  [0x02de, 0x02de],
  [0x02e0, 0x02e9],
  [0x02df, 0x02df],
  [0x02ea, 0x02ff],
  [0x0300, 0x036f],
  [0x1ab0, 0x1aff],
  [0x1dc0, 0x1dff],
  [0x20d0, 0x20ff],
  [0xfe20, 0xfe2f],
  [0x0300, 0x036f],
  [0x032a, 0x032a],
  [0x0346, 0x034f],
  [0x035c, 0x036f],
  [0x1ab0, 0x1abe],
  [0x1dc0, 0x1dff],
  [0x20d0, 0x20ff],
  [0xfe20, 0xfe2f]
];

const allMarks = combiningMarkRanges.map((pair) =>
  createInclusiveRange(...pair)
);

const isAccentedMark = (codePoint: number) =>
  allMarks.some((isInRange) => isInRange(codePoint));

export const splitIntoUnicodeCharacters = (text: string = ""): string[] => {
  const characters: string[] = [];
  let codePointIndex = 0;
  let codePoint: number;
  while ((codePoint = text.codePointAt(codePointIndex)!) !== undefined) {
    if (isSurrogatePair(codePoint)) {
      characters.push(String.fromCodePoint(codePoint));
      codePointIndex += 2;
    } else {
      characters.push(String.fromCodePoint(codePoint));
      codePointIndex += 1;
    }
    while (
      (codePoint = text.codePointAt(codePointIndex)!) !== undefined &&
      isAccentedMark(codePoint)
    ) {
      characters[characters.length - 1] += String.fromCodePoint(codePoint);
      codePointIndex += 1;
    }
  }
  return characters;
};

export const normalizeCharacters = (characters: string[]): string[] =>
  characters.map((char) =>
    isSurrogatePair(char.codePointAt(0)!)
      ? char
      : char.toLocaleLowerCase().normalize("NFKD")[0]
  );

export const makeSearchable = (str: string) =>
  normalizeCharacters(splitIntoUnicodeCharacters(str)).join("");
