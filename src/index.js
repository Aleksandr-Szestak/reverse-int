module.exports = function reverse(n) {
  let a = Math.abs(n);
  const maxSt = Math.ceil(Math.log10(a));
  let c = 0;
  let r = 0;
  let rez = 0;
  while (a > 0) {
    c = a % 10;
    a = (a - c) / 10;
    r += 1;
    rez += c * 10 ** (maxSt - r);
  }
  return rez;
};
