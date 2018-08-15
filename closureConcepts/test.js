const getStyles = require('./closureConcepts');

const props = {
  xs: 1,
  xsPush: 1,
  xsPull: 1,
  xsOffset: 1,
  xsHidden: 1,
  sm: 1,
  smPush: 1,
  smPull: 1,
  smOffset: 1,
  smHidden: 1,
  md: 1,
  mdPush: 1,
  mdPull: 1,
  mdOffset: 1,
  mdHidden: 1,
  lg: 1,
  lgPush: 1,
  lgPull: 1,
  lgOffset: 1,
  lgHidden: 1
};

runTests();

function runTests() {
  const expect = {
    position: 'relative',
    minHeight: '1px',
    paddingRight: '15px',
    paddingLeft: '15px',
    float: 'left',
    width: '8.333333333333332%',
    left: '8.333333333333332%',
    right: '8.333333333333332%',
    marginLeft: '8.333333333333332%',
    visibility: 'hidden'
  };

  const inputs = [100, 769, 993, 1201];
  const outputs = inputs.reduce(
    (accum, width) => ({ ...accum, [width]: getStyles(width, props) != expect }),
    {}
  );

  console.log(outputs);
}
