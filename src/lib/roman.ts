const MAP: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(num: number): string {
  if (!Number.isInteger(num) || num <= 0 || num >= 4000) return String(num);
  let n = num;
  let out = "";
  for (const [v, s] of MAP) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}

/**
 * Leading-zero Arabic ordinal — "01" "02" "11" — used on cards and small
 * ordinal markers where Roman numerals would slow readers down. Reserve
 * Roman for the large display chapter markers paired with step titles.
 */
export function pad2(num: number): string {
  return String(num).padStart(2, "0");
}
