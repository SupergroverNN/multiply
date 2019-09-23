module.exports = function multiply(first, second) {
  const result = [];
  first
    .split("")
    .reverse()
    .forEach((item1, i) =>
      second
        .split("")
        .reverse()
        .forEach(
          (item2, j) =>
            (result[i + j] = result[i + j]
              ? result[i + j] + item1 * item2
              : item1 * item2)
        )
    );
  for (let i = 0; i < result.length; i++) {
    const temp = result[i] % 10;
    const add = Math.floor(result[i] / 10);
    result[i] = temp;
    if (result[i + 1]) result[i + 1] += add;
    else if (add) result[i + 1] = add;
  }

  return result.reverse().join("");
};
