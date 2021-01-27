/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * `quotes` array
 */
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

/**
 * This is a function to retrieve a quote from the array at random
 */
const getRandomQuote = () => {
  /**
   * @return {number} randomNumber - from 0 to quotes length
   */
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // console.log({ randomNumber });

  /**
   * @return {object} A quote object from quotes
   */
  return quotes[randomNumber];
};

/**
 * Prints a quote on the document
 */
const printQuote = () => {
  /**
   * @return {object} A quote object from quotes
   */
  const quoteObject = getRandomQuote();

  /**
   * @type {string} html - html to be inserted
   */
  let html = `
      <p class="quote">${quoteObject.quote}</p>
      <p class="source">${quoteObject.source}`;

  /**
   * Truthy check for a citation in the object
   */
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}</span>`;
  }

  /**
   * Truthy check for a year in the object
   */
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }

  /**
   * Add the closing p tag
   */
  html += `</p>`;

  /**
   * Insert html into the quote-box element
   */
  document.getElementById('quote-box').innerHTML = html;
};

/**
 * Click event listener for the print quote button
 */

document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
