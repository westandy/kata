function notPure() {
  var count = 0;

  return function() {
    count++;
    return 'Count is:' + count;
  };
}
