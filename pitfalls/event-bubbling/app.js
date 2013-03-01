var useCapture = false;

var button = document.getElementsByTagName("input")[0];
button.addEventListener("click", function(e) {
  console.log("Button Click Event: ", e);
  console.log('this: ', this);
  console.log('e.target: ', e.target);
  console.log("");
  // e.stopPropagation();
}, useCapture);

var div = document.getElementsByTagName("div")[0];
div.addEventListener("click", function(e) {
  console.log("Div Click Event: ", e);
  console.log('this: ', this);
  console.log('e.target: ', e.target);
  console.log("");
}, useCapture);

document.body.addEventListener("click", function(e) {
  console.log("Body Click Event: ", e);
  console.log('this: ', this);
  console.log('e.target: ', e.target);
  console.log("");
}, useCapture);