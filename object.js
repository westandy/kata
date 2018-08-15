const myObj = (function() {
  /**
   * Closed (aka private) data
   */
  let propA = 'a';
  let propB = 'b';
  this.propC = 'c';

  this.setPropA = value => (propA = value);
  this.getPropA = () => propA;

  return {
    setPropA,
    getPropA
  };
})();

console.log(myObj.getPropA());
