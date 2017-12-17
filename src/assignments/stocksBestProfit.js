/**
 *
 * @param {Array} data
 * @returns {number}
 */
export default function stocksBestProfit(data) {
  if (data.length < 2) {
    throw new Error('At least 2 items are needed');
  }

  let minPrice = data[0];
  let maxProfit = data[1] - data[0];

  data.map(function (currentPrice, index) {
    if (index === 0) {
      return;
    }

    let currentProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit);

    minPrice = Math.min(minPrice, currentPrice);

  });

  return maxProfit;
}
