const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens = kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = kittens.shift(name);
  return kittens;
}
