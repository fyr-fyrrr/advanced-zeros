module.exports = function getZerosCount(number, base) {
  // your implementation
  let zerosCount = Number.MAX_VALUE; // представляет максимальное числовое значение
  /*base = a^p1 * b^p2 * c^p3 * …
  zerosCount = min{1/p1(n/a + n/(a*a) + ….), 1/p2(n/b + n/(b*b) + ..), ….}.*/
  for (let i = 2; i <= base; i++) {
    if (base % i == 0) {
      let p = 0;
      while (base % i == 0) {
         base = base / i;     
         p++;
      }
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
      zerosCount = Math.min(zerosCount, Math.floor(c / p))
    }
  }
  return zerosCount;
}