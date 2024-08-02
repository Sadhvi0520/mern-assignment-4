// Q.1 Write a function that takes an object and returns an array of the object's keys and values.
function getEntries(obj) {   //declaring a function that will convert object to array
    var entries = [];        //declaring empty array
    for (var key in obj) {   //loop through each key in the object
        entries.push([key,obj[key]]);   //push the key-value pair as an array
    }
    return entries;          //return the array
}
var exampleObject = {name: 'Sadhvi', age: 18,};  //example of object
console.log(getEntries(exampleObject));          //displaying the output


// Q.2 Create a function to convert a string to title case.
function toTitleCase(str) {              //defining a function that takes string as input
    var words = str.split (' ');         //splitting an input string into array of words
    var titleCasedWords = [];            //initializing an empty array

    for (var i = 0; i<words.length; i++) {   //loop through each words in an array
        var word = words[i];                 //get the current word
        var firstLetter = word.charAt(0).toUpperCase();     //capitalize the first letter of the word
        var restOfWord = word.slice(1).toLowerCase();       //convert the rest of the word to lower case
        var titleCasedWord= firstLetter + restOfWord;       //combine the first letter and the rest of words
        titleCasedWords.push(titleCasedWord);               //add the title cased word to array
    }
    return titleCasedWords.join(' ');                       //join the titlecased word back into single string
}

const inputString = 'john smith';             //example
console.log(`"${inputString}" becomes "${toTitleCase(inputString)}"`)  //display the output


// Q.3 Implement a function that checks if an object is empty.
function isObjectEmpty(obj) {            //writing a function that takes object as parameter 
    return Object.keys(obj).length ===0; //if the length of the object is 0 it will return true
}
const emptyObject = {};                  //creating an empty object
const nonEmptyObject = {key: 'value'};   //creating an object with key-value pair

console.log(isObjectEmpty(emptyObject)); //display the output of function when called empty object
console.log(isObjectEmpty(nonEmptyObject)) //dispaly the output of function when called non-empty object


// Q.4 Write a function to count the number of occurrences of each character in a string.
function countOccurrences(str) {    //writing a function that accepts string as input
    const charCount = {};           //initializing an empty object
    for (const char of str) {       //iterate through each character in the string
        charCount [char] = (charCount[char] || 0) + 1;   //increment the count for each character
    }
    return charCount;               //returning the object with  character count
}
const input = "Helloo, Welcome";    //defining the input string
const result = countOccurrences(input);   //calling the function with input string 

for (const char in result) {              //iterate through the keys
    console.log(`${char} = ${result[char]}`);   //displaying the character and its count
}