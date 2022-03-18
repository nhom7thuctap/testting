// "Input: aabbbccdda
// Output: a2b3c2d2a1"

const chars = "aabbbccdda";

for (let i = 0; i < chars.length; i++) {
  let count = 1;
  for (let j = i + 1; j < chars.length; j++) {
    if (chars[i] == chars[j]) {
      count++;
    } else {
      break;
    }
    i = j;
  }
  let newChars = chars[i] + count;
  console.log(newChars);
}
