/**
 * For the given list of integers, and for each index you want to find the product of
 * every integer except the integer at that index.
 * @param {Array} data
 *
 * @return {Array}
 */
export default function getProductOfAllItemsExceptAtIndex(data) {
  let products = [];

  data.map(function (value, i) {
    for (let j = 0; j < data.length; j++) {

      if (typeof products[j] === 'undefined') {
        products[j] = 1;
      }

      if (j !== i) {
        products[j] *= value;
      }
    }
  });

  return products;
}
