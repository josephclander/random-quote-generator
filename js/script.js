/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Einstein',
  },
  {
    quote: 'Wisely, and slow. They stumble that run fast.',
    source: 'William Shakespeare',
    citation: 'Romeo & Juliet',
  },
  {
    quote: 'If you judge people, you have no time to love them.',
    source: 'Mother Teresa',
  },
  {
    quote: 'Get busy living, or get busy dying.',
    source: 'Stephen King',
    citation: 'Different Seasons',
    year: 1982,
  },
  {
    quote:
      'All endings are also beginnings. We just don’t know it at the time.',
    source: 'Mitch Albom',
    citation: 'The Five People You Meet In Heaven',
    year: 2003,
  },
];

// console.log(quotes[0].quote);

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
