import bubbleSort from './bubbleSort';
import {expect} from 'chai';

describe('Sort Algorithm: Bubblesort', () => {
  it('test 1', () => {
    expect(bubbleSort([4, 1, 8, 10, 3, 6, 5])).to.eql([1, 3, 4, 5, 6, 8, 10]);
  });
});
