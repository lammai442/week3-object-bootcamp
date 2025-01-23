// Arraymetoder att lägga på minnet
/*  
.isArray() - Kontrollerar om ett värde är en array. Returnerar true eller false.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('Hello'));  // false

.at() - Returnerar elementet på en specifik position i arrayen (kan använda negativa index för att räkna bakifrån).
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.at(1));  // 'Banana'
console.log(fruits.at(-1)); // 'Cherry'

.filter() - Skapar en ny array med alla element som uppfyller ett visst villkor.
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

.forEach() - Utför en funktion för varje element i arrayen (ingen ny array skapas).
let fruits = ['Apple', 'Banana'];
fruits.forEach(fruit => console.log(fruit));
// Output: 'Apple' 'Banana'

.includes() - Kontrollerar om ett visst värde finns i arrayen. Returnerar true eller false.
let fruits = ['Apple', 'Banana'];
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Cherry')); // false

.indexOf() - Returnerar indexet för det första förekomsten av ett värde i arrayen (eller -1 om det inte finns).
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits.indexOf('Banana')); // 1
console.log(fruits.indexOf('Orange')); // -1

.map() - Skapar en ny array genom att applicera en funktion på varje element.
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

.pop() - Tar bort och returnerar det sista elementet i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
let lastFruit = fruits.pop();
console.log(lastFruit); // 'Cherry'
console.log(fruits);    // ['Apple', 'Banana']

.push() - Lägger till ett eller flera element i slutet av arrayen och returnerar den nya längden.
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

.shift() - Tar bort och returnerar det första elementet i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
let firstFruit = fruits.shift();
console.log(firstFruit); // 'Apple'
console.log(fruits);     // ['Banana', 'Cherry']

.slice() - Returnerar en kopia av en del av arrayen (utan att ändra originalet).
let fruits = ['Apple', 'Banana', 'Cherry'];
let sliced = fruits.slice(1, 3);
console.log(sliced); // ['Banana', 'Cherry']

.some() - Kontrollerar om minst ett element i arrayen uppfyller ett villkor. Returnerar true eller false.
let numbers = [1, 2, 3];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

.sort() - Sorterar elementen i arrayen (kan modifiera originalet).
let numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // Sorterar i stigande ordning
console.log(numbers); // [1, 2, 3, 4]

.splice() - Lägger till, tar bort eller ersätter element i arrayen.
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.splice(1, 1, 'Orange'); // Tar bort 'Banana' och lägger till 'Orange'
console.log(fruits); // ['Apple', 'Orange', 'Cherry']

.unshift() - Lägger till ett eller flera element i början av arrayen och returnerar den nya längden.
let fruits = ['Banana', 'Cherry'];
fruits.unshift('Apple');
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

*/

// STRINGS
/* EXTRA
Strings
String-objektet innehåller en rad olika fördefinierade funktioner. Ni kommer att behöva använda några av nedanstående till Strings-övningarna. Läs på om det själva.


.concat() - Metoden för att slå ihop två eller fler arrayer eller strängar utan att ändra de ursprungliga.
EXEMPEL: const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


.charAt() - Metoden för att hämta tecknet på en specifik position i en sträng.
EXEMPEL: 
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"


.substring() - Metoden för att extrahera en del av en sträng mellan två angivna index utan att ändra den ursprungliga strängen. Ifall det endast anges en index så kommer den köra till slutet av strängen.
EXEMPEL:
const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"


.replace() - Metoden ersätter en del av en sträng som matchar ett angivet värde (eller ett reguljärt uttryck (regexp eller regex som är en förkortning av regular expression)) med ett nytt värde, utan att ändra den ursprungliga strängen.
EXEMPEL:
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"


.toLowerCase() - Metoden används för att konvertera alla bokstäver i en sträng till små bokstäver (lowercase). 
EXEMPEL: 
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."


.toUpperCase() - Metoden används för att konvertera alla bokstäver i en sträng till stora bokstäver (uppercase).
EXEMPEL: 
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


.toString() - Metoden används för att konvertera ett värde till en strängrepresentation. Nästan alla typer i JavaScript (som nummer, arrayer, objekt och booleaner) har en inbyggd .toString()-metod.
EXEMPEL: 
let num = 123;
console.log(num.toString()); 
// Output: "123"


.trim() - Metoden används för att ta bort alla ledande och avslutande mellanslag (whitespace) från en sträng. Det påverkar inte mellanslag som finns mellan ord i själva strängen.
EXEMPEL:
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";


.split() - Metoden används för att dela upp en sträng i en array baserat på ett specifikt delimiters (t.ex. ett tecken eller mönster). Det skapar en ny array där varje element är en del av den ursprungliga strängen som separerats vid den angivna punkten.
EXEMPEL:
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); //VID HELA ORD SÅ ANVÄNDS ETT MELLANSLAG INOM PARENTESEN, UTAN MELLANSLAG SÅ DELAS VARJE TECKEN!
console.log(words[3]);
// Expected output: "fox"

const chars = str.split(''); //VID ENSKILDA TECKEN SÅ ANVÄNDS INGET MELLANSLAG INOM PARENTESEN!
console.log(chars[8]);
// Expected output: "k"

let text = "hello";
let chars = text.split("");
console.log(chars); 
// Output: ["h", "e", "l", "l", "o"]

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


.includes() - Metoden används för att kontrollera om en viss värde (sträng, array, eller annat) finns i en sträng eller array. Den returnerar true om värdet finns, annars false.
EXEMPEL:
let sentence = "I love JavaScript!";
console.log(sentence.includes("JavaScript")); 
// Output: true

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); 
// Output: true

.slice() - används för att extrahera en del av en sträng baserat på start- och slutindex (eller från slutet med negativa index), utan att ändra originalsträngen.
EXEMPEL:
let text = "Frontendutveckling";

// Använd .slice() för att ta ut en del av texten
let resultat = text.slice(0, 8); // Börjar vid index 0 och slutar vid index 8 (tar inte med 8)
console.log(resultat); // Skriver ut "Frontend"

let resultatNegativt = text.slice(-10); // Tar de sista 10 tecknen
console.log(resultatNegativt); // Skriver ut "utveckling"
*/

// LOOPAR
/* 
forEach-loop - En forEach-loop används för att iterera genom varje element i en array och köra en funktion för varje element.
EXEMPEL:
let names = ["Felicia", "Pelle", "Peter"];

names.forEach(name => {
    console.log(`Hej, ${name}!`);
});

for...of-loopen - Ett enkelt och läsbart sätt att iterera över itererbara objekt som arrayer, men den saknar inbyggd tillgång till index, vilket gör den mindre flexibel jämfört med andra loopar som forEach eller for-loopen.
EXEMPEL:
let names = ["Felicia", "Pelle", "Peter"];

for (let name of names) {
    console.log(`Hej, ${name}!`);
}
*/
