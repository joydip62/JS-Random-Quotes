/******************************************
project 1 - Random Quote Generator
******************************************/
const loadQuote = document.querySelector('#load-quote');
const quote = document.querySelector('.quote');
const source = document.querySelector('.source');
/***
 * `quotes` array
 ***/

var quotes = [
    `A rose by any other name would smell as sweet.`,
    `All that glitters is not gold.`,
    `Ask not what your country can do for you; ask what you can do for your country.`,
    `Ask, and it shall be given you; seek, and you shall find.`,
    `Genius is one percent inspiration and ninety-nine percent perspiration.`,
    `I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.`,
    `I have always depended on the kindness of strangers.`,
    `If you want something said, ask a man; if you want something done, ask a woman.`,
    `Life is like a box of chocolates. You never know what you’re gonna get.`,
    `Life is like riding a bicycle. To keep your balance, you must keep moving.`
];
var sources = [
    `William Shakespeare`,
    `William Shakespeare`,
    `John Kennedy`,
    `The Bible`,
    `Thomas Edison`,
    `Martin Luther King`,
    `Blanche Dubois (character)`,
    `Margaret Thatcher`,
    `Forrest Gump (character)`,
    `Albert Einstein`,
];
/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
    var randomQut = Math.floor(Math.random() * quotes.length);
    var randomSor = Math.floor(Math.random() * sources.length);
    // console.log(randomSor);
    if (randomQut == randomSor) {
        quote.innerText = quotes[randomQut];
        source.innerText = sources[randomSor];
    }
}

/***
 * `printQuote` function
 ***/


/***
 * click event listener for the print quote button
 ***/
 loadQuote.addEventListener('click', function(event){
    event.preventDefault();
    getRandomQuote();
});