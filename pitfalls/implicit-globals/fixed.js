var countDown = function(start) {
  console.log('Counting down from: ', start);
  for (var i = start; i >= 0; i--) {
    console.log(i);
  }
};

for (var i = 0; i < 5; i++) {
  countDown(i);
}