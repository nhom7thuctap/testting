// "Input: aabbbccdda
// Output: a2b3c2d2a1"

// const chars = "aabbbccdda";

// for (let i = 0; i < chars.length; i++) {
//   let count = 1;
//   for (let j = i + 1; j < chars.length; j++) {
//     if (chars[i] == chars[j]) {
//       count++;
//     } else {
//       break;
//     }
//     i = j;
//   }
//   let newChars = chars[i] + count;
//   console.log(newChars);
// }

var vueInstance = new Vue({
  el: "#app",
  data: {
    title: "this is title",
    count: 0,
    data: [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 3, name: "c" },
      { id: 4, name: "d" },
    ],
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
});

console.log(vueInstance);
