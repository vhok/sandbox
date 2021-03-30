// quotes.js
const jadenSmithQuotes = [
    "How Can Mirrors Be Real If Our Eyes Aren't Real?",
    "Lately People Call Me Scoop Life",
    "If A Book Store Never Runs Out Of A Certain Book, Does That Mean That Nobody Reads It, Or Everybody Reads It",
    "The Great Gatsby Is One Of The Greatest Movies Of All Time, Coachella"
];

const jadenSmithQuote = () => {
    const randomJadenQuote = Math.floor(Math.random() * jadenSmithQuotes.length);
    return jadenSmithQuotes[randomJadenQuote];
};

const getIndex = (index) => {
    if(index < jadenSmithQuotes.length) {
        return jadenSmithQuotes[index];
    }

    return null;
};


module.exports = {
    randomQuote: jadenSmithQuote,
    getQuoteById: getIndex
};

