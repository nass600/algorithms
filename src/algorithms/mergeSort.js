function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

export default function mergeSort(data) {
  if (data.length < 2) {
    return data;
  }

  let middle = Math.floor(data.length / 2);
  let left = data.slice(0, middle);
  let right = data.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}
