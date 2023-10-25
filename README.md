Sure, here is the Markdown code for the README file you provided:

```markdown
### README

This is a simple Node.js module for calculating the match percentage between two sentences. It removes simple words (such as "of", "at", "i", etc.) from the sentences before calculating the match percentage.

## Usage

To use the module, simply install it using npm or yarn:

```
npm install match-percentage
```

or

```
yarn add match-percentage


Once the module is installed, you can import it into your code and use the `checkMatchPercentage()` function to calculate the match percentage between two sentences. The function takes two arguments: the two sentences to compare. It returns an object with two properties:

* `matchPercentage`: The match percentage between the two sentences, as a number between 0 and 100.
* `match`: A string indicating whether the two sentences are likely to be a match, based on the match percentage.

Here is an example of how to use the module:

javascript
const matchPercentage = require('match-percentage');

const sentence1 = 'This is a simple sentence.';
const sentence2 = 'This is a very similar sentence.';

const result = await matchPercentage.checkMatchPercentage(sentence1, sentence2);

console.log(result);
```

Output:

```
{
  matchPercentage: 90,
  match: 'This is probably a match'
}


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

```
{
  matchPercentage: 80,
  match: 'This is probably a match'
}


## Conclusion

This module provides a simple way to calculate the match percentage between two sentences. It can be used in a variety of applications, such as plagiarism detection, text matching, and natural language processing.


This Markdown code can be copied and pasted into a file with the `.md` extension, such as `README.md`. Then, the file can be viewed in a Markdown viewer or converted to HTML to be published on a website.
