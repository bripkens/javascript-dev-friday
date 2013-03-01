console.log('b (start of file): ', b);

if (true) {
  var b = 5;
}

(function() {
  console.log('b (start of function): ', b);

  if (true) {
    var b = 42;
  }

  console.log('b (end of function): ', b);
})();

console.log('b (end of file): ', b);