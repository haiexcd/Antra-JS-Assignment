// JavaScript Assignment

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223 

function reverseNumber(integer) {
    const stringArray = integer.toString().split("")
    let start = 0;
    let end = stringArray.length - 1
    while (start < end) {
        let temp = stringArray[start]
        stringArray[start] = stringArray[end]
        stringArray[end] = temp
        end--
        start++
    }
    return Number(stringArray.join(""))
}

console.log(reverseNumber(32243)); // 34223

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(string) {
    // remove spaces and any special string
    string = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = string.length - 1;
    while (left <= right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
    }
    return true; node
};

console.log(isPalindrome("madam")); // true

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function stringCombination(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            result.push(string.slice(i, j))
        }
    }
    return result
}

console.log(stringCombination("dog")); // d, do, dog, o, og, g 

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function inOrder(string) {
    return string.split("").sort().join("")
}

console.log(inOrder("webmaster")); // abeemrstw

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function titleCase(string) {
    const result = []
    const stringArray = string.split(" ")
    for (let i = 0; i < stringArray.length; i++) {
        result.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1))
    }
    return result.join(" ")
}

console.log(titleCase("the quick brown fox")); // The Quick Brown Fox

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longestWord(string) {
    let result = ''
    const stringArray = string.split(" ")
    for (let i = 0; i < stringArray.length; i++) {
        if (result.length < stringArray[i].length) {
            result = stringArray[i]
        }
    }
    return result
}

console.log(longestWord("Web Development Tutorial")); // Development

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function vowelCount(string) {
    const match = string.match(/[aeiou]/gi)
    return match === null ? 0 : match.length
}

console.log(vowelCount("The quick brown fox")); // 5

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
    return num % 2 === 0 ? false : true
}

console.log(isPrime(4)); // 

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function checkType(string) {
    return typeof (string)
}

console.log(checkType(true)); // boolean

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function matrix(n) {
    let i
    let j
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                console.log(" 1 ")
            } else {
                console.log(" 0 ")
            }
            console.log("---------")
        }
    }
}

console.log(matrix(3)); //

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function secondBigSmall(array) {
    const result = []
    const sortedArray = array.sort()
    result.push(sortedArray[1])
    result.push(sortedArray[sortedArray.length - 2])
    return result
}

console.log(secondBigSmall([1, 2, 3, 4, 5])); //

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, 
// the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, 
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.

function perfectNum(num) {
    if (num === 0) return false;
    let sum = 0;
    for (let i = 0; i <= (num / 2); i += 1) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

console.log(perfectNum(6)); // 
console.log(perfectNum(28)); //
console.log(perfectNum(496)); //
console.log(perfectNum(8128)); //

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factors(integer) {
    let result = [], i;
    for(i = 1; i <= Math.floor(Math.sqrt(integer)); i+=1){
        if(integer % i === 0){
            result.push(i)
            if(integer / i !==i){
                result.push(integer / i);
            }
        }
        result.sort(function(a,b)
        {
            return a - b;});
        }
        return result;
}

console.log(factors(12)); // [ 1, 2, 3, 4, 6, 12 ]

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function toCoins(num, coins) {
    let result = []
    for(let i = 0; i < coins.length; i++){
        while(num >= coins[i]){
            num -= coins[i]
            result.push(coins[i])
        }   

    }
    return result
}

console.log(toCoins(46, [25, 10, 5, 2, 1])); //

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
// Accept b and n from the user and display the result. 

function exponent(b, n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = b * result
    }
    return result
}

console.log(exponent(2, 4))

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChar(string) {
    let result = ""
    for (let i = 0; i < string.length; i++) {
        if (result.includes(string[i]) === false) {
            result += string[i]
        }
    }
    return result
}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function stringCount(word) {
    const result = {}
    const wordArray = word.split("")
    for (let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i]
        if (result[letter]) {
            result[letter] = result[letter] + 1
        } else {
            result[letter] = 1
        }
    }
    return result
}

console.log(stringCount("hello"))

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binaryIndexOf(compare, sortedElements) {
    if (Array.isArray(sortedElements)) {
        let lowerIndex = 0;
        let upperIndex = sortedElements.length - 1;

        while (lowerIndex <= upperIndex) {
            const index = Math.floor((upperIndex + lowerIndex) / 2);

            const comparison = compare(sortedElements[index], index, sortedElements);

            if (comparison > 0) {
                lowerIndex = index + 1;
            }

            if (comparison === 0) {
                return index;
            }

            if (comparison < 0) {
                upperIndex = index - 1;
            }
        }
    }
    return -1;
}

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];

function forNumber(target) {
    return (element, index) => {

        if (element === target) {
            return 0;
        }
        if (element < target) {
            return 1;
        }
        if (element > target) {
            return -1;
        }
    };
}

console.log(binaryIndexOf(forNumber(274), elements));

// 19. Write a JavaScript function that returns array elements larger than a number. 

function largerNums(num, arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i]) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(largerNums(275, [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136]))

// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomString(input) {
    let result = ""
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < input; i++) {
        result += charList.charAt(Math.floor(Math.random() * charList.length))
    }
    return result
}

console.log(randomString(12))

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function subset(arr, num) {
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push([arr[i]]);
        let length = result.length;
        for(j = 0; j < length - 1; j++){
            result.push([arr[i], ...result[j]])
        }
    }
    return result.filter(subset =>
        subset.length === num)
}
console.log(subset([1, 2, 3], 2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function occurrences(string, letter) {
    let result = 0
    for (let i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            result++
        }
    }
    return result
}

console.log(occurrences('microsoft.com', 'o'))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function firstSingleCharacter(word) {
    let count = {};
    const wordArray = word.toLowerCase().split('');
    let firstLetter = null;

    wordArray.forEach(letter => {
        if ( count[letter] ){
            count[letter] ++;
        }else{
            count[letter] = 1;
        }
    });

    for (let singleChar in count) {
        if (count[singleChar] === 1) {
            firstLetter = singleChar;
            break;
        }
    }
    return firstLetter;
}

console.log(firstSingleCharacter('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, 
// is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
// comparing each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(compare, elements) {
    if (Array.isArray(elements)) {
      let inOrder;
  
      do {
        inOrder = true; 
  
        for (
          let index = 0, length = elements.length - 1;
          index < length;
          index++
        ) {
          const leftElement = elements[index];
          const rightElement = elements[index + 1];
  
          if (compare(leftElement, rightElement) > 0) {
            elements[index] = rightElement;
            elements[index + 1] = leftElement;
            inOrder = false; 
          }
        }
      } while (inOrder === false);
    }
    return elements;
  }



function compare(left, right) {
  return right - left;
}

console.log(bubbleSort(compare, [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"

function LongestCountryName(array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (result.length < array[i].length) {
            result = array[i]
        }
    }
    return result
}

console.log(LongestCountryName(["Australia", "Germany", "United States of America"]))

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestSubstr(string){
    let result = '';
    for(let i = 0; i < string.length; i++){
        const set = new Set();
        let temp = '';
        for(let j = i; j < string.length; j++){
            if(!set.has(string.charAt(j))){
                set.add(string.charAt(j));
                temp += string.charAt(j);
            }else{
                break;
            }
        }
        result = temp.length > result.length? temp : result;
    }
    return result;
}

console.log(longestSubstr("abercereawreaew"))

// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem 
// is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, 
// the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; 
// for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic 
// substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings 
// (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) 
// rather than returning only one substring or returning the maximum length of a palindromic substring.



  function longestPalindrome(string) {
    let max_length = 0
    let maxp = ''

    for(let i = 0; i < string.length; i++){
        let subs = string.substr(i, string.length)
        for(let j = subs.length; j>= 0; j--){
            let sub_subs_str = subs.substr(0,j)
            if (sub_subs_str.length <= 1)
            continue
            if(isPalindrome(sub_subs_str)){
                if(sub_subs_str.length > max_length){
                    max_length = sub_subs_str.length
                    maxp = sub_subs_str
                }
            }
        }
    }
    return maxp
  }


console.log(longestPalindrome("nan noon is redder"))

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 


function hello(){
    return 'Hello'
}

function firstName(user, func){
    const message = func()
    console.log(`${message} ${user}`)
}

console.log(firstName("Hai", hello))

// 29. Write a JavaScript function to get the function name. 


function functionName(){
    return arguments.callee.name;
}

console.log(functionName())