// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Atha'));

// var person = {
//   name: 'Atha',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

// addStatement (using curly braces)
var addStatement = (a,b) => {
  return a+b;
}

// addExpression (using expression syntax)
var addExpression = (a,b) => a+b;

console.log('add', add(1,3));
console.log('add', add(9,0));

console.log('addStatement', addStatement(1,3));
console.log('addStatement', addStatement(9,0));

console.log('addExpression', addExpression(1,3));
console.log('addExpression', addExpression(9,0));
