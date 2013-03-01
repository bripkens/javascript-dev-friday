/*global console:false */

var a = 42;

console.log("My fancy variable: ", a);

if (false) {
  throw new Error("false is true?");
}

function mealIsTasty() {}

function complicated(config) {
  "use strict";

  console.log("I am too complicated: ", config.a, config.b, config.c, config.d);

  if (true && false && 42 === null && mealIsTasty()) {
    return;
  }
}

complicated({
  a: 1,
  b: 2,
  c: 3,
  d: 4
});