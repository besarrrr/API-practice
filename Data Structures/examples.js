//Array

let orders = [
    [1, "John Doe", "2021-01-01"],
    [2, "Jane Doe", "2021-01-02"],
    [3, "John Smith", "2021-01-03"]
  ]

// Linked List

class Order {
    constructor(order_id, customer_name, order_date) {
        this.order_id = order_id;
        this.customer_name = customer_name;
        this.order_date = order_date;
        this.next = null;
    }
}

class Customer {
    constructor(customer_id, customer_name) {
        this.customer_id = customer_id;
        this.customer_name = customer_name;
        this.orders = null;
    }
}

// Create linked list of orders for customer 1
let order1 = new Order(1, "John Doe", "2021-01-01");
let order2 = new Order(2, "John Doe", "2021-01-02");
order1.next = order2;

let customer1 = new Customer(1, "John Doe");
customer1.orders = order1;

// Create linked list of orders for customer 2
let order3 = new Order(3, "Jane Doe", "2021-01-03");
let order4 = new Order(4, "Jane Doe", "2021-01-04");
order3.next = order4;

let customer2 = new Customer(2, "Jane Doe");
customer2.orders = order3;

// Trees

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let root = new Node("Jane Doe");
root.left = new Node("John Doe");
root.right = new Node("John Smith");



// Question 1: Is Unique

function isUnique(arr) {

    //  Function takes an array as an argument. 
    // seenValues is an empty object that is going to be used to keep track of values seen
    
    const seenValues = {}

    // For loop is used to iterate over the array
  
    for (let i = 0; i < arr.length; i++) {
      // we already saw this element in the array
      if (seenValues[arr[i]]) {
        return false;
      } else {
        seenValues[arr[i]] = true
      }
    }
  // if all elements in the array have been processed without returning false, the function returns true,
    return true;
  }


// I know that the foor loop is going to iterate through each element in the array and see if it has already been seen.
// This is done by checking if the currrent element arr[i] has been seen in the seenValues object
// Area of consusion is how the empty object gets the iterated keys in it?



// Question 2: Permutation (rearrangement of the elements)

function permutation(string1, string2){

    let ex1 = string1.length;
    let ex2 = string2.length;

    if ( ex1 != ex2 ) {
        return false;
    }

    // First check if both string are the same length, if != same length then can't be a permutation

    // split the string into lists using the .split() method

    let str1 = string1.split('');
    let str2 = string2.split('');

    // use .sort() to put the strings  in UTF-16 code units order

    str1.sort();
    str2.sort();

    // Compare sorted strings
     for(let i = 0; i < ex1; i++) {
        if (str1[i] != str2[i]) {
            return false;
        } else {
            return true;
        }
    }

}

// Above code is wrong,  it came from my brain/google bits and pieces to make an answer


// Bottom is correct and was created via ChatGPT when I asked it if my code was correct and it said no :/ 

function isPermutation(string1, string2) {
    if (string1.length !== string2.length) {
      return false;
    }
  
    let charCount = {};
  
    for (let i = 0; i < string1.length; i++) {
      let char = string1[i];
      charCount[char] = charCount[char] + 1 || 1;
    }
  
    for (let i = 0; i < string2.length; i++) {
      let char = string2[i];
      if (!charCount[char]) {
        return false;
      } else {
        charCount[char]--;
      }
    }
  
    return true;
  }


// the function creates an empty object charCount to store the frequency count of each character in string1. The function then loops over the characters in
// string1 and adds 1 to the count for each character.
// Finally, the function loops over the characters in string2 and decrements the count for each character. If the count for a character becomes negative, 
// it means that string2 contains a character that was not in string1, so the function returns false.
//After all characters in string2 have been processed, the function returns true if all character counts are 0, indicating that the two strings are permutations of each other.

//would love to walk over this one together!


// question 3: urlIfy

function urlIfy(string) {


    for ( let i=0; i <= string.length; i++) {
        if ( i == " ") i = "%20";
        else  i == i;
    }
    return string;

}
// mine is top, correct is bottom= closer!!

function urlIfy(string, length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        if (string[i] === " ") {
            result += "%20";
        } else {
            result += string[i];
        }
    }
    return result;
}


// Question 4 Palindrome permutation- check is a string given can be made into a permutation and # of permutations it has

function palPer(string) {
    // there must be two of every char, only one odd char

    let hash = {}; //create a hash table to store letters,if the same letter is seen again you delete it from the hash table
    let charCount = 0;

    for (let i = 0; i < string.length; i++) {
            let c = string[i]; // current character is at string[i]
            if ( c === '') {
                continue; // skip spaces
            }
            if (hash[c]) {
                delete hash[c]; //if it is already in the hash table delete it 
            } else {
                hash[c] = true // if not store it in the hash as true
            }
            charCount++; // increment character count 
    }

    if (charCount % 2 === 0) {
        return Object.keys(hash).length === 0;
    } else {
        return Object.keys(hash).length ===1;
    }
    // this is saying that for the string to be a palindrone there must be 0 || 1 keys in the hash table
    // the number of characters in the string is even and there are no characters left in the hash table, the code inside the if statement is executed and the function returns true. 
    //If the number of characters in the string is odd and there is more than 1 character left in the hash table, the code inside the else block is executed and the function returns false.


}



// Q 5 one away - goal is to see if string 1 is one or less moves away from being string 2

function oneAway(string1, string2) {
    let count = 0

    for (let i =0 ; i <= string1.length; i++) {
        for(let j =0; j <= string2.length; j++) {
            if (string1[i] === string2[j]) {
                count += 0;
            } else {
                count += 1;
            }
        }
    }

    if (count <= 1) {
        return true;
    } else {
        return false; 
    }
}

function oneAway(string1, string2) {
    let count = 0

    for (let i =0 ; i < string1.length; i++) {
        for(let j =0; j < string2.length; j++) {
            if (string1[i] !== string2[j] && i !== j) { // dont super get this part of i!==j and why that is correct
                count += 1;
            }
        }
    }

    if (count <= 1) {
        return true;
    } else {
        return false; 
    }
}


// question 6 String compression: ex is taking string that is aabcccccaa into a2b1cfa3

function stringComp(string) {

    let compressed = ""; // empty string 
   
    let messageArray = string.split(""); // split string into array to iterate 
   
     for (let i = 0; i < messageArray.length; i++){
       let count = 1;
       let currentLetter = messageArray[i];
   
       while (i < messageArray.length - 1 && messageArray[i] === messageArray[i + 1]){
           count++;
           i++;
        }   
         if (count === 1){
           compressed += currentLetter;
         } else {
           compressed += currentLetter + count;
         }
   
     }
   
    if ( string.length <= compressed.length ) {
       return string;
    } else {
       return compressed;
    }
   
   }