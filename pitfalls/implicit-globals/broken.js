var countDown = function(start) {
  console.log('Counting down from: ', start);
  for (i = start; i >= 0; i--) {
    console.log(i);
  }
};

for (i = 0; i < 5; i++) {
  countDown(i);
}