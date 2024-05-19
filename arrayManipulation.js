function processArray(numbers) {
    return numbers.map(num => (num % 2 === 0 ? num ** 2 : num * 3));
  }
  
  
  console.log(processArray([6, 13, 14, 15, 16]));
  


  


  
  function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => (numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase()));
  }
  
  const strings = ["Pham", "Hanni", "is", "my", "favourite","from","Newjeans"];
  const processedNumbers = processArray([1, 2, 3, 4, 5,6,7]);
  console.log(formatArrayStrings(strings, processedNumbers));
  