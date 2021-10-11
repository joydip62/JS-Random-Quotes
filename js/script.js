/******************************************
project 1 - Random Quote Generator
******************************************/
const loadQuote = document.querySelector('#load-quote');
const quote = document.querySelector('.quote');
/***
 * `quotes` array
 ***/

var quotes = [
    `A rose by any other name would smell as sweet.	- William Shakespeare`,
    `All that glitters is not gold.	-William Shakespeare`,
    `Ask not what your country can do for you; ask what you can do for your country. -John Kennedy`,
    `Ask, and it shall be given you; seek, and you shall find.	-the Bible`,
    `Genius is one percent inspiration and ninety-nine percent perspiration. -Thomas Edison`,
    `I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. -Martin Luther King`,
    `I have always depended on the kindness of strangers. -Blanche Dubois (character)`,
    `If you want something said, ask a man; if you want something done, ask a woman. -Margaret Thatcher`,
    `Life is like a box of chocolates. You never know what you’re gonna get. -Forrest Gump (character)`,
    `Life is like riding a bicycle. To keep your balance, you must keep moving.	-Albert Einstein`
];

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
    var randomNum = Math.floor(Math.random() * quotes.length);
    // console.log(randomNum);
    quote.innerText = quotes[randomNum];
    
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