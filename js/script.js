/******************************************
project 1 - Random Quote Generator
******************************************/
const loadQuote = document.querySelector('#load-quote');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');

/***
 * `quotes` array
 ***/
const quote1 =  {
    text: `A rose by any other name would smell as sweet.`,
    author: `William Shakespeare`,
    year: 1980,
    citation: `https://www.thoughtco.com/famous-short-quote-2833143`,
};
const quote2 =  {
    text: `All that glitters is not gold.`,
    author:  `William Shakespeare`,
    year: 1450,
    citation: `https://www.superprof.co.in/blog/english-language-quotations/`,
};
const quote3 =  {
    text: `Ask not what your country can do for you; ask what you can do for your country.`,
    author:  `John Kennedy`,
    year: 2012,
    citation: `https://blog.hubspot.com/sales/famous-quotes`,
};
const quote4 =  {
    text: `Ask, and it shall be given you; seek, and you shall find.`,
    author:  `The Bible`,
    year: 1793,
    citation: `https://www.townandcountrymag.com/leisure/arts-and-culture/reviews/a2382/best-oscar-wilde-quotes/`,
};
const quote5 =  {
    text: `Genius is one percent inspiration and ninety-nine percent perspiration.`,
    author:  `Thomas Edison`,
    year: 2015,
    citation: `https://parade.com/937586/parade/life-quotes/`,
};
const quote6 =  {
    text: `I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.`,
    author:  `Martin Luther King`,
    year: 1650,
    citation: `https://www.superprof.co.in/blog/english-language-quotations/`,
};
const quote7 =  {
    text: `I have always depended on the kindness of strangers.`,
    author: `Blanche Dubois (character)`,
    year: 1720,
    citation: `https://parade.com/937586/parade/life-quotes/`,
};
const quote8 =  {
    text: `If you want something said, ask a man; if you want something done, ask a woman.`,
    author: `Margaret Thatcher`,
    year: 2020,
    citation: `https://blog.hubspot.com/sales/famous-quotes`,
};
const quote9 =  {
    text: `Life is like a box of chocolates. You never know what you’re gonna get.`,
    author: `Forrest Gump (character)`,
    year: 1950,
    citation: `https://blog.hubspot.com/sales/famous-quotes`,
};
const quote10 =  {
    text: `Life is like riding a bicycle. To keep your balance, you must keep moving.`,
    author:  `Albert Einstein`,
    year: 1890,
    citation: `https://blog.hubspot.com/sales/famous-quotes`,
};


var quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];
// console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
 function getRandomQuote() {
    let index = Math.floor(Math.random() * quotes.length);  
    quote.innerHTML = quotes[index].text;
    source.innerHTML = quotes[index].author;
    year.textContent = quotes[index].year;
    citation.textContent = quotes[index].citation;
    if(year || citation){
        source.innerHTML =` ${source.innerHTML},  ${year.textContent}  ${citation.textContent}`;
    }
} 

getRandomQuote()

/***
 * `printQuote` function
 ***/
 function printQuote(){
    getRandomQuote()  
}
/***
 * click event listener for the print quote button
 ***/
 loadQuote.addEventListener('click', function(){
    printQuote()
});