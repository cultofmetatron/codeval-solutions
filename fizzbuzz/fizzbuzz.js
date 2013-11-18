module.exports = {}


module.exports.fizzbuzz = function(first, second, n) {
  var divisibleBy = function(n, divisor) {
    return (n % divisor === 0);
  }
  
  var fizzy = function(n) {
    if (divisbleBy(n, first) && divisibleBy(n, second)) { return 'FB'; }
    if (divisible(n, first))  { return 'F';}
    if (divisible(n, second)) { return 'B'}
    return n;
  };

  var i;
  var ret = '';
  for (i = 0, i <= n, i++) {
    ret = ret + fizzy(n) + ' ';
  }
  return ret.split(' ').join(' ');

};
