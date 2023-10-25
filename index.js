
const simpleWords = ['of, at, i, by, in, is, to, as, for, of, a, the, this, I, he, you, and, but, or, if'];

function removeSimpleWords(sentence, simpleWords) {
  const words = sentence.split(' ').filter(word => !simpleWords.includes(word.toLowerCase()));
  return words;
}

async function matchPercentage(sentence1, sentence2) {
  try {
    let mainString;
    let otherString;
    let matchPercentage = 0.0;

    if (sentence1.length > sentence2.length) {
      mainString = sentence1;
      otherString = sentence2;
    } else {
      mainString = sentence2;
      otherString = sentence1;
    }

    const listOfMainString = removeSimpleWords(mainString, simpleWords);
    const listOfOtherString = removeSimpleWords(otherString, simpleWords);

    const mainWordWorth = Math.round((100.0 / listOfMainString.length), 2);

    for (const mainWord of listOfMainString) {
      for (const otherWord of listOfOtherString) {
        if (otherWord.toLowerCase() === mainWord.toLowerCase()) {
          matchPercentage += mainWordWorth;
        }
      }
    }

    const result = {
      matchPercentage: Math.round(matchPercentage),
      match: matchPercentage >= 40 ? 'This is probably a match' : 'This is probably NOT a match',
    };
    return result;
  }
  catch {
    console.error(err);
    return {
      matchPercentage: 0,
      match: 'Error occurred',
    };
  }
}

export default matchPercentage;
