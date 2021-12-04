module.exports.solve = (input) => {
  const I = input.map((x) => {
    return x.split(/(\d)/).filter((x) => x !== "");
  });

  const calc = (fn) => {
    let g = Array.from({length: I[0].length},()=>"0") 
      .map((g, i) => {
        return I.map((x) => parseInt(x[i])).reduce((a, b) => a + b);
      })
      .map((g) => {
        return fn(g, I.length);
      })
      .join("");

    return [g, parseInt(g, 2)];
  };

  const result = {
    gamma: calc((x, length) => {
      return x > length / 2 ? 1 : 0;
    }),
    epsilon: calc((x, length) => {
        return x > length / 2 ? 0 : 1;
    })
  };

  console.log(result);
  console.log(result.gamma[1] * result.epsilon[1]);
};
