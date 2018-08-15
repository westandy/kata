const always = value => () => value;

//const f = always(() => {});
//console.log(f() === f());

module.exports.default = always;
