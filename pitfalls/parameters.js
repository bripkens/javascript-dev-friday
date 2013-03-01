var a = [];

var add = function(value) {
  a.push(value);
};

add(1);
console.log('After "add" method call: ', a);

var addTo = function(array, value) {
  array.push(value);
};

addTo(a, 2);

console.log('After "addTo" method call: ', a);