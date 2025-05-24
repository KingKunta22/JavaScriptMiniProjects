const quote = document.querySelector("p");
const button = document.querySelector('#submit');
const usedIndexes = new Set();

const quotes = [
    "I think, therefore I am",
    "What's in a name? That which we call a rose by any other word would smell as sweete",
    "The only thing we have to fear is fear itself",
    "Be yourself; everyone else is already taken",
    "The future belongs to those who believe in the beauty of their dreams" 
];

function generateQuote() {
    
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while(true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIdx)) continue

        const randomQuote = quotes[randomIdx]
        quote.textContent = randomQuote;
        usedIndexes.add(randomIdx);
        break

    }
}

button.addEventListener('click', generateQuote)

