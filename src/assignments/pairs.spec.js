import pairs from './pairs';
import {expect} from 'chai';

describe('Assignment: Pairs summing given value', () => {
  it('test 1', () => {
    let matches = pairs([2,7,1,4,3,6,7,2], 8);
    expect(matches.length).to.equal(4)
  });

  it('test 2', () => {
    let matches = pairs([2,6,4,4], 8);
    expect(matches.length).to.equal(2);
  });

  it('test 3', () => {
    let matches = pairs([2,3,4,1], 8);
    expect(matches.length).to.equal(0);
  });

  it('test 4', () => {
    let matches = pairs([2,-3,4,11,0,8,6,4,8], 8);
    expect(matches.length).to.equal(5);
  });
});
