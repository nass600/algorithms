import findDuplicates from './findDuplicates';
import {expect} from 'chai';

describe('Assignment: Find duplicates', () => {
  it('test 1', () => {
    expect(findDuplicates([4])).to.equal(false);
  });

  it('test 2', () => {
    expect(findDuplicates([4, 2, 1, 3, 2, 4])).to.equal(true);
  });

  it('test 3', () => {
    expect(findDuplicates([4, 2, 1, 3])).to.equal(false);
  });

  it('test 4', () => {
    expect(findDuplicates(['a', 'b', 'c', 'd'])).to.equal(false);
  });

  it('test 5', () => {
    expect(findDuplicates(['a', 'b', 'a', 'd'])).to.equal(true);
  });
});
