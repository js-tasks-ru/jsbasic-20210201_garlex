function getMinMax(str) {
  // '1, -5.8 или 10, хотя 34 + -5.3 и 73'
  // '25,-1,-234,4,   1000'
  let result = [];

  str.split(',').forEach((item) => {
    result.push(...item.split(' '));
  });

  result = result.map((item) => parseFloat(item))
                 .filter((item) => isFinite(item));

  return {
    min: Math.min(...result),
    max: Math.max(...result),
  };
}
