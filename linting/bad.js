a = 42;

console.log('My fancy variable: ', 42)

if (false) throw new Error("false is true?");

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 500);
}

function complicated(a, b, c, d) {
  console.log("I am too complicated: ", a, b, c, d);

  if (true) {
    if (false) {
      if (42 === null) {
        if (mealIsTasty()) {
          return;
        }
      }
    }
  }
};

complicated(1, 2, 3, 4);