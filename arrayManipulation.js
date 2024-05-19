function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
  }
  
  
  console.log(processArray([6, 13, 14, 15, 16]));
  