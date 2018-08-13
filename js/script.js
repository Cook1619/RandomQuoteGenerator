// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes =
    [
        {
            quote: "Believe you can, and your halfway there",
            source: "Theodore Roosevelt",
            citation: "",
            year: "",
            category: " History"

        },
        {
            quote: "Parents were invented to make children happy by giving them something to ignore",
            source: "Ogden Nash",
            citation: "",
            year: 1950,
            category: " Random"
        },
        {
            quote: "Labor to keep alive in your in your breast that little spark of celestial fore called conscience",
            source: "George Washington",
            citation: "",
            year: 1758,
            category: " History"
        },
        {
            quote: "Remember when life's path is steep to keep your mind even",
            source: "Horace",
            citation: "",
            year: 34,
            category: " History"
        },
        {
            quote: "The world will know that free men stood against a tyrant, that few stood against many, and before this battle is over, even a god-king can bleed",
            source: "King Leonidas",
            citation: "Final battle for Xerxes",
            year: 2006,
            category: " Movies"
        },
        {
            quote: "Do you wish me a good morning, or mean it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?",
            source: "Godolf the Grey",
            citation: "First time meeting bilbo",
            year: 1937,
            category: " Movies"
        }

    ]
// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(array) {
    var randomQ = Math.floor(Math.random() * quotes.length)
    //randomQ returns a number which is random, and quotes is an array of objects, so the first object is index[0] and so on so this will grab a random quote between 0-6 which is how many indexes this array has, and returns it
    return quotes[randomQ];
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
    //calls getRandomQuote and stores it in a variable
    var getQuotes = getRandomQuote(quotes);
    //Building up string pending on if there is a value in the object
    let quoteString = '';
    quoteString += `<p class="quote"> ${getQuotes.quote} </p>`
    quoteString += `<p class="source"> ${getQuotes.source} </p>`
    if (getQuotes.citation) {
        quoteString += `<span class="citation"> ${getQuotes.citation} </span>`
    } else if (getQuotes.year) {
        quoteString += `<span class="year"> ${getQuotes.year} </span>`
    } else if (getQuotes.category) {
        quoteString += `<span class="category"> ${getQuotes.category} </span>`
    }
    colorChange();
    document.getElementById('quote-box').innerHTML = quoteString;
}

//This function creates a custom HEX color everytime
function colorChange() {
    let randcol = "";
    let allchar = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = "#" + randcol;
}
//calls the printquute function and will change everything every 3 seconds
function switchQuotes() {
    timeedSwitch = window.setInterval(printQuote, 3000);
}

switchQuotes();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);