let chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "@",
  "#",
  "!",
  ".",
  "&",
  "$",
];

let exclude = ["azerty", "qwerty"];

function generer() {
  document.getElementById("add").value = main();
}

function randomize() {
  let index = Math.floor(Math.random() * 68);
  return index;
}

function generate() {
  let word =
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()] +
    chars[randomize()];
  return word;
}

function main() {
  let result = "";
  let trials = "";
  let counter = 0;
  do {
    result = generate();
    trials += result;
  } while (exclude.indexOf(result) >= 0);
  return trials;
}
