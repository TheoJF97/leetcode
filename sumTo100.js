// What is the sum of all the whole numbers from 1 to 100 (inclusive)?

const sum100 = () => {
    let sum = 0;
    for (let i = 0; i < 101; i++) {
      sum += i;
    } return sum;
  }
  
  console.log(sum100());
  
  
  // Solution:
  function sumTo100() {
    let num = 0;
    let totalSum = 0;
    while (num <= 100) {
      totalSum += num;
      num++;
    }
    return totalSum;
  }
  
  console.log(sumTo100());