{
  function sumArray(numbers: number[]): number {
    let result = 0;
    for (let number of numbers) {
      result = result + number;
    }
    return result;
  }
  const finalResult = sumArray([1, 2, 3, 4, 5]);
  console.log(finalResult);
}
