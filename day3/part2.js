module.exports.solve = (input) => {
  const I = input.map((x) => {
    return x.split(/(\d)/).filter((x) => x !== "");
  });

  const calc = (fn) => {
    let a = I;
    let i = 0;

    let rate = (i) => {
      return a.map((x) => parseInt(x[i])).reduce((a, b) => a + b);
    };

    while (a.length > 1) {

      let most_common = fn(rate(i), a.length);
      a = a.filter((x) => {
        return (x[i] === most_common.toString());
      });

      i += 1;
    }

    return a[0];
  };

  const result = {
    oxygen: calc((x, length) => {
      return x >= length / 2 ? 1 : 0;
    }),
    co2: calc((x, length) => {
      return x >= length / 2 ? 0 : 1;
    }),
  };

  console.log(result);
  console.log(parseInt(result.oxygen.join(""), 2) * parseInt(result.co2.join(""),2));
};
