export default function findSum(collection, sum) {
  let complements = {};
  let result = {
    first: null,
    last: null
  };

  for (let i = 0; i < collection.length; i++) {
    let complement = sum - collection[i];

    if (typeof complements[collection[i]] !== 'undefined') {
      return {
        first: complements[collection[i]],
        last: i
      };
    }

    complements[complement] = i;
  }

  return result;
}
