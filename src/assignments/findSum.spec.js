import findSum from './findSum';
import {expect} from 'chai';

describe('Assignment: Find sum in array', () => {
  it('test 1', () => {
    expect(findSum([4], 8)).to.eql({
      first: null,
      last: null
    });
  });

  it('test 2', () => {
    expect(findSum([4, 2, 1, 3, 2, 4], 4)).to.eql({
      first: 2,
      last: 3
    });
  });

  it('test 3', () => {
    expect(findSum([4, 2, -1, 3], 3)).to.eql({
      first: 0,
      last: 2
    });
  });
});
