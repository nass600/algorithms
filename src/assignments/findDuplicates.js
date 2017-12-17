export default function findDuplicates(collection) {
  let temp = {};

  for (let i = 0; i < collection.length; i++) {
    if (typeof temp[collection[i]] !== 'undefined') {
      return true;
    }

    temp[collection[i]] = collection[i];
  }

  return false;
}
