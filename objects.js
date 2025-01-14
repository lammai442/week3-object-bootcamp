//BIBBLAN
/* 1 */
/* Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.

SVAR:
let book = {
    title: 'Book of the year',
    author: 'Daniel Alfredsson',
    numPages: 295
}

console.log(book);
 */

/* 2+3 */
/* 2: Skapa en array av objekt med flera stycken böcker 
/* 3: Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.

SVAR:
let library = [
    {
        title: 'Book of the Year',
        author: 'Daniel Alfredsson',
        numPages: 295,
        isbn: 1321231,
        year: 2013,
        languages: {
            language: 2,
            name: ['German', 'Italian', 'Swedish']
        },
        available: true,
        genre: ['Fiction', 'Adventure', 'Drama']
    },
    {
        title: 'Journey Through Time',
        author: 'Anna Karlsson',
        numPages: 350,
        isbn: 5423111,
        year: 2017,
        languages: {
            language: 3,
            name: ['English', 'Spanish', 'French']
        },
        available: false,
        genre: ['Historical', 'Mystery', 'Romance']
    },
    {
        title: 'Tech Revolution',
        author: 'Michael Andersson',
        numPages: 410,
        isbn: 7896543,
        year: 2021,
        languages: {
            language: 1,
            name: ['English']
        },
        available: true,
        genre: ['Technology', 'Science', 'Non-fiction']
    },
    {
        title: 'The Last Frontier',
        author: 'Elisabeth Söderberg',
        numPages: 275,
        isbn: 3214567,
        year: 2008,
        languages: {
            language: 4,
            name: ['Swedish', 'Norwegian', 'Danish', 'Finnish']
        },
        available: false,
        genre: ['Fantasy', 'Adventure', 'Epic']
    }
];

//En funktion för att leta efter en array som ligger i ett underliggande objekt. I detta fall: library > languages > language
function findLanguage(input) {
    return library.find(book => book.languages.name.some(language => language.toLowerCase() === input.toLowerCase()))    
}

//En funktion för att leta efter en boktitel. .find() hittar den första som uppfyller och stoppar sedan allt.
function findBook(input) {
    return library.find(book => book.title.toLowerCase() === input.toLowerCase())
}

//En for-loop för att se vilka som innehåller språket Swedish.
for (let i = 0; i < library.length; i++) {
    let books = [];

    if (library[i].languages.name.includes('Swedish')) {
        books.push(library[i]);
        console.log(library[i]);
        
    }
}

// console.log(findBook('The last frontier'));
// console.log(findLanguage('Swedish'));
*/