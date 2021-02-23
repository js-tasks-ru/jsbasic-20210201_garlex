function getMinMax(str) {
  let result = str.split(' ')
    .join()
    .split(',')
    .map((item) => parseFloat(item))
    .filter((item) => isFinite(item));

  return {
    min: Math.min(...result),
    max: Math.max(...result),
  };
}
