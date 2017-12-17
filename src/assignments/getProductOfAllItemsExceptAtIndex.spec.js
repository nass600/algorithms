import getProductOfAllItemsExceptAtIndex from './getProductOfAllItemsExceptAtIndex';
import {expect} from 'chai';

describe('Assignment: Products of all items except at index', () => {
  it('test 1', () => {
    let result = getProductOfAllItemsExceptAtIndex([10, 7, 5, 8, 11, 9]);
    expect(result).to.eql([27720, 39600, 55440, 34650, 25200, 30800])
  });

  it('test 2', () => {
    let result = getProductOfAllItemsExceptAtIndex([10, 0]);
    expect(result).to.eql([0, 10])
  });
});
