import { users } from './users.js';

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

//LETTER FREQUENCY
/* 2 */
/* Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }

Svar:
function letterFrequency(str) {
    // skapar först ett tomt objekt för att lagra teckena.
    let frequency = {};
    let input = str.toLowerCase().toUpperCase();
    
    for (let char of input) {
        if (frequency[char]) { // HÄR KOLLAR MAN OM DEN ITERERADE BOKSTAVEN FINNS MED I TILLAGDA OBJEKTET? VID FÖRSTA OMGÅNGEN SÅ FINNS INTE BOKSTAVEN MED OCH GÅR DIREKT TILL ELSE-SATSEN
            frequency[char]++; // NÄR BOKSTAVEN FINNS MED SÅ KOMMER DEN ISTÄLLET ADDERA 1 TILL VÄRDET PÅ DEN BOKSTAVEN
        } else {
            frequency[char] = 1; // NÄR BOKSTAVEN KOMMER FÖRSTA GÅNGEN SÅ KOMMER ELSE-SATSEN ATT BÖRJA.
        }
    }
    return frequency;
}

console.log(letterFrequency('Jag heter lam Mai!'));
*/

// USER REGISTER
/* 3 */
/* filterByCountry
Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden. */

let searchedNat = filterNat(users, 'DE');

function filterNat(users, searchNat) {
    let nationality = [];
    for (let user of users) {
        if (user.nat === searchNat) {
            nationality.push({
                name: `${user.name.first} ${user.name.last}`,
                nat: user.nat,
            });
        }
    }
    return nationality;
}

console.log(searchedNat);

/* filterByGender 
Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista innehållande endast kvinnliga eller manliga användare.*/

const female = ['Ms', 'Mademoiselle', 'Miss', 'Madame', 'Mrs'];
const male = ['Mr', 'Monsieur'];

let searchedFemale = filterByGender(users, female);
let searchedMale = filterByGender(users, male);

function filterByGender(users, genderArray) {
    let userByGender = [];
    for (let user of users) {
        if (genderArray.includes(user.name.title)) {
            userByGender.push({
                Name: `${user.name.first} ${user.name.last}`,
                Titel: user.name.title,
            });
        }
    }
    return userByGender;
}

console.log('Female: ', searchedFemale);
console.log('Male: ', searchedMale);

/* listEmails 
Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser
*/

let mail = filterByMail(users);

function filterByMail(user) {
    let mailAdresses = [];
    for (let user of users) {
        mailAdresses.push(user.email);
    }
    // console.log(mailAdresses);

    return mailAdresses;
}

// console.log(mail);

/* Utmaning! - Reformat Emails 
Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska följa formatet efternamn.förnamn@evilcorp.countrydomain.

Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.

Svar:

*/

// Den nya arrayen skapas med objekt för att senare lägga in den i arrayen users med nya keywords. Här finns också keyworden nat för att sedan jämföras med den i users så att de matchas och kan lägga in rätt keyword i rätt objekt i users.
let inputArray = [
    {
    domain : '.fr',
    country : 'france',
    nat : 'FR'
    },
    {
    domain : '.ch',
    country : 'schweiz',
    nat : 'CH'
    },
    {
    domain : '.de',
    country : 'deutschland',
    nat : 'DE'
    },
    {
    domain : 'no',
    country : 'norway',
    nat : 'NO'
    },
    {
    domain : '.us',
    country : 'usa',
    nat : 'US'
    },
    {
    domain : '.tr',
    country : 'turkey',
    nat : 'TR'
    },
    {
    domain : '.fi',
    country : 'finland',
    nat : 'FI'
    },
    {
    domain : '.uk',
    country : 'greatbritain',
    nat : 'GB'
    },
    {
    domain : '.nl',
    country : 'netherland',
    nat : 'NL'
    },
    {
    domain : '.nz',
    country : 'newzeeland',
    nat : 'NZ'
    },
    {
    domain : '.au',
    country : 'australia',
    nat : 'AU'
    },
    {
    domain : '.es',
    country : 'estland',
    nat : 'ES'
    },
    {
    domain : '.ie',
    country : 'ireland',
    nat : 'IE'
    },
    {
    domain : '.dk',
    country : 'denmark',
    nat : 'DK'
    },
    {
    domain : '.ir',
    country : 'iran',
    nat : 'IR'
    },
    {
    domain : '.br',
    country : 'brasil',
    nat : 'BR'
    },
    {
    domain : '.ca',
    country : 'canada',
    nat : 'CA'
    }
 ];

addKeywords(users, inputArray);

// Funktionen för att lägga in keywordsen i arrayen users. Använder sig av två argument som behöver skickas med. Första argumentet är vart kommer de nya keywordsen hamna medan andra inputen är varifrån de nya keywordsen kopiers ifrån. 
function addKeywords(outputArray, inputArray){

    // En foreach loop fär att lägga till nya keywords i arrayen users. Den kommer gå igenom objekt i den arrayen.
    outputArray.forEach(user => {
        // En for of loop för att kolla igenom alla objekt i den nya arrayen som har de nya keywords.
        for(let array of inputArray) {
            // Villkoret är ifall nationaliteten i users objekt finns med i det nya arrayen så ska följande göras.
            if(array.nat.includes(user.nat)) {
                // Här skapas en kopia av nya arrayens keyword domain med dess värde och läggs in i users array.
                user.domain = array.domain;
                // Här skapas en kopia av nya arrayens keyword country med dess värde och läggs in i users array.
                user.country = array.country;
            }    
        }    
    });
};
    
// En lista med mailen läggs in i denna variabel. Här skickar vi med arrayen users som argument.
let newMail = changeMail(users);

// Funktion för att ändra på mailen. Först måste de nya keywordsen skapas innan denna används.
function changeMail(inputArray) {
    // En tom array skapas där mailen ska läggas in i arrayen.
    let newMailArray = [];
    // En loop för att gå igenom alla objekt i users.
    for(let user of inputArray) {
        user.email = `${user.name.last}.${user.name.first}@evilcorp.${user.country}${user.domain}`;
        newMailArray.push(user.email);
        // if(user.nat === 'FR'){
        //     user.email = `${user.name.last}.${user.name.first}@evilcorp.${user.country}${user.domain}`;
        //     newMail.push(user.email);
        // }
        // else if(user.nat === 'CH') {
        //     user.email = `${user.name.last}.${user.name.first}@evilcorp.schweiz.ch`;
        //     newMail.push(user.email);
        // }
        // else if(user.nat === 'de') {
        //     user.email = `${user.name.last}.${user.name.first}@evilcorp.schweiz.ch`;
        //     newMail.push(user.email);
        // }
    }
    return newMailArray;
}

console.log(newMail);

