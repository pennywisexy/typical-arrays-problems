
exports.min = function min (array) {
    if (array === undefined || array.length === 0) return 0;
  let arr = array.flat().sort((a,b) => {return a-b});
  return arr[0];
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) return 0;
    let arr = array.flat().sort((a,b) => {return b - a});
    return arr[0];
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) return 0;
    return array.reduce((a,b) => {return a+b}) / array.length;
}
