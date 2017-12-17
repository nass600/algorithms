/**
 *
 * @param {Number} amount
 * @param {Array} coins
 */
export default function countCoins(amount, coins) {
  let groups = [];

  coins.map(function (value) {
    if (amount % value === 0) {
      groups.push(Array(amount/value).fill(value));
    }
  });

  return groups;
}
