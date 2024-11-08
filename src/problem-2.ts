{
  function removeDuplicates(numbers: number[]): number[] {
    const uniqueNum: number[] = [];
    for (let number of numbers) {
      if (!uniqueNum.includes(number)) {
        uniqueNum.push(number);
      }
    }
    return uniqueNum;
  }
  const finalResult = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(finalResult);
}
