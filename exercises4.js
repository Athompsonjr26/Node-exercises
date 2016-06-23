function makeCalculator(){
  var calCounter = 0;
  function calculator() {

  }
  return calculator;
}


var count = makeCalculator();
console.log(count());
