// Question: Write a function that takes in an array of integers and returns an object with keys minimum, maximum, average with correct values.

const getAverages = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const output = {
    minimum: Math.min(...arr),
    maximum: Math.max(...arr),
    average: sum / arr.length,
  };
  return output;
};

const arr2 = [1, 5, 10];

console.log(getAverages(arr2));
