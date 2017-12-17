export default function bubbleSort(data) {
  if (Array.isArray(data) === false) {
    throw new Error('Input data is not an array');
  }

  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        sorted = false;
        let temp = data[i + 1];
        data[i + 1] = data[i];
        data[i] = temp;
      }
    }
  }

  return data;
};
