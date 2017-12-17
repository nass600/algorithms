import stocksBestProfit from './stocksBestProfit'
import {expect} from 'chai';

describe('Assignment: Stocks Best Profit', () => {
  it('test 1', () => {
    expect(stocksBestProfit([10, 7, 5, 8, 11, 9])).to.equal(6)
  });

  it('test 2', () => {
    expect(stocksBestProfit([10, 7, 5, 8, 2])).to.equal(3)
  });

  it('test 3', () => {
    expect(stocksBestProfit([1, 2, 8, 7, 5, 8])).to.equal(7)
  });

  it('test 4', () => {
    expect(stocksBestProfit([2, 30, 4, 10, 13, 1, 12])).to.equal(28)
  });

  it('test 5', () => {
    expect(stocksBestProfit([2, 2, 2, 2, 2])).to.equal(0)
  });

  it('test 6', () => {
    expect(stocksBestProfit([8, 5, 4, 3, 2])).to.equal(-1)
  });
});
