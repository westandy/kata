this.hello = 'hello!';

let stuff = function() {
  console.log(this);
};

// stuff.apply(this);

const stuff2 = () => {
  console.log(this);
};
// stuff2();

/*function log(str) {
  console.log(str);
}*/

const {log} = console;

log('foo');
