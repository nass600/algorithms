/**
 * Make pairs summing up target value
 *
 * @param {number[]} data
 * @param {number} target
 * @returns {Array}
 */
function pairs(data, target) {
  let matches = []

  for (let i=0; i < data.length; i++) {
    for (let j=i+1; j <data.length;j++) {
      if (data[i] + data[j] === target) {
        matches.push([data[i], data[j]])
      }
    }
  }

  return matches
}

export default pairs
