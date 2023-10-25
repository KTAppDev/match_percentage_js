
### README

This is a simple Node.js module for calculating the match percentage between two sentences. It removes simple words (such as "of", "at", "i", etc.) from the sentences before calculating the match percentage.

I originally wrote this to compare title headlines from local news websites I web scrape. On any given day, all the websites can have the same story with the title being very similar, which helps me check for duplicate articles.

Get me at kentaylorappdev@gmail.com

Open issues on github - contributions welcomed

## Usage

To use the module, simply install it using npm or yarn:

```
npm install match_percentage
```

or

```
yarn add match_percentage
```

Once the module is installed, you can import it into your code and use the `checkMatchPercentage(s1,s2)` function to calculate the match percentage between two sentences. The function takes two arguments: the two sentences to compare. It returns an object with two properties:

* `matchPercentage`: The match percentage between the two sentences, as a number between 0 and 100.
* `match`: A string indicating whether the two sentences are likely to be a match, based on the match percentage.

Here is an example of how to use the module:


```
const matchPercentage = require('match_percentage');
```

or

```
import matchPercentage from "match_percentage";


const sentence1 = 'This is a simple sentence.';

const sentence2 = 'This is a very similar sentence.';

const result = matchPercentage(sentence1, sentence2);

console.log(result);
```


Output:

```

{
  matchPercentage: 90,
  match: 'This is probably a match'
}
```

## Simple Words

The module includes a list of simple words that are removed from the sentences before calculating the match percentage. This list can be customized by passing an array of words to the `removeSimpleWords()` function.

Here is an example of how to customize the list of simple words:

javascript
const matchPercentage = require('match-percentage');

const simpleWords = ['of', 'at', 'i', 'by', 'in', 'is', 'to', 'as', 'for', 'of', 'a', 'the', 'this', 'I', 'he', 'you', 'and', 'but', 'or', 'if'];

const customSimpleWords = ['very', 'simple'];

const result = await matchPercentage.checkMatchPercentage(sentence1, sentence2, customSimpleWords);

console.log(result);
```

Output:

{
  matchPercentage: 80,
  match: 'This is probably a match'
}
```


## Conclusion

This module provides a simple way to calculate the match percentage between two sentences. It can be used in a variety of applications, such as plagiarism detection, text matching, and natural language processing.

