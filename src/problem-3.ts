{
  function countWordOccurrences(
    allWords: string,
    specificWord: string
  ): number {
    const wordOfTheSentences = allWords.toLowerCase().split(" ");
    const mainWord = specificWord.toLowerCase();
    let count = 0;

    for (let words of wordOfTheSentences) {
      if (words === mainWord) {
        count++;
      }
    }

    return count;
  }
  const finalResult = countWordOccurrences("I love typescript", "typescript");
  console.log(finalResult);
}
