function makeCounter() {
  var counter = 0;
  function newFunc() {
    return;
  }
  return newFunc;
}
var count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
