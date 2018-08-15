var globalStuff = 'stuff';

function someFunc(paramA, paramB) {
  var someScopedStuff = 'scoped';
  console.log('In Function:', globalStuff);
  console.log('In Function Local', someScopedStuff);
}

// Output Test
//someFunc();
//console.log('Out of Function:', globalStuff);
//console.log('Out of Function Local:', someScopedStuff);

// Let Lesson
function someOtherFunc() {
  var someLetData = 0;
  for (var ii = 0; ii < 5; ii++) {
    someLetData += ii;
    var temp = 'AmIScoped';
  }

  console.log(ii);
  console.log(temp);
}
someOtherFunc();

console.log(someLetData);
console.log(ii);
console.log(temp);
