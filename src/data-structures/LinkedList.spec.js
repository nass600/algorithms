import {Node, LinkedList} from './LinkedList';
import {expect} from 'chai';

let list = null;

beforeEach(() => {
  list = new LinkedList();
});

describe('Data Structure: Linked List', () => {
  it('test addition', () => {
    list.add(new Node('Thomas'));
    list.add(new Node('Roger'));
    list.add(new Node('Petra'));
    list.add(new Node('John'));
    list.add(new Node('Bryan'));

    expect(list.count()).to.equal(5);
    expect(list.first().value).to.equal('Thomas')
  });

  it('test get item at index', () => {
    list.add(new Node('Thomas'));
    list.add(new Node('Roger'));
    list.add(new Node('Petra'));

    expect(list.get(1).value).to.equal('Roger');
    expect(() => list.get(3)).to.throw(Error, 'Item not found at index 3');
  });

  it('test deletion', () => {
    list.add(new Node('Thomas'));
    list.add(new Node('Roger'));
    list.delete(0);

    expect(list.count()).to.equal(1);
    expect(list.first().value).to.equal('Roger');
    expect(() => list.delete(1)).to.throw(Error, 'Item not found at index 1');
  });
});
