quotesList = [
    {'author':'Steve Jobs',
        'quote':'"The only way to do great work is to love what you do."'
    },
    {'author':'Albert Schweitzer',
        'quote':'"Success is not the key to happiness. Happiness is the key to success."'
    },
    {'author':'Nelson Mandela',
        'quote':'"It always seems impossible until it\'s done."'
    },
    {'author':'Wayne Gretzky',
        'quote':'"You miss 100% of the shots you don\'t take."'
    },
    {'author':'William James',
        'quote':'"Act as if what you do makes a difference. It does"'
    },
    {'author':'Winston Churchill',
        'quote':'"Success is not final, failure is not fatal: It is the courage to continue that counts."'
    },
    {'author':'Zig Ziglar',
        'quote':'"What you get by achieving your goals is not as important as what you become by achieving your goals."'
    },
    {'author':'C.S. Lewis',
        'quote':'"Hardships often prepare ordinary people for an extraordinary destiny."'
    },
    {'author':'Mahatma Gandhi',
        'quote':'"You must be the change you wish to see in the world."'
    },
    {'author':'SJerry Dunn',
        'quote':'"Don\'t limit your challenges, challenge your limits."'
    }
]

var randomIndex;
var quotesIndex;
var lastIndex;

function generateQuotes(){
    do{
    randomIndex = Math.floor(Math.random() * quotesList.length);
    quotesIndex = quotesList[randomIndex];
    } while (randomIndex === lastIndex);
    document.getElementById('quotes').innerHTML = (quotesIndex.quote+`<br>`+`<strong>`+quotesIndex.author+`</strong>`)
    lastIndex = randomIndex;

}