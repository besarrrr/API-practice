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

   let finalString = str1.sort(); 
   let finalString2 = str2.sort();

    // Compare sorted strings
     for(let i = 0; i < ex1; i++) {
        if (finalString[i] != finalString2[i]) {
            return false;
        } else {
            return true;
        }
    }

}


// question 3: urlIfy

function urlIfy(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            result += "%20";
        } else {
            result += string[i];
        }
    }
    return result;
}


// Question 4 Palindrome permutation- check is a string given can be made into a permutation 

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
    // Check if the length difference between the strings is greater than 1
    if (Math.abs(string1.length - string2.length) > 1) {
      return false;
    }
  
    // Determine which string is longer
    let first, second;
    if (string1.length > string2.length) {
      first = string1;
      second = string2;
    } else {
      first = string2;
      second = string1;
    }
  
    // Initialize a counter to keep track of the number of differences
    let count = 0;
  
    // Split the longer and shorter strings into arrays of characters
    let str1 = first.split('');
    let str2 = second.split('');
  
    // Create a hash map to count the frequency of characters in the longer string
    const firstStringMap = {};
  
    // Loop through each character in the longer string
    for (let str1Index = 0; str1Index < str1.length; str1Index++) {
      // Get the current character
      const currentLetter = str1[str1Index];
  
      // Check if the current character has already been counted
      let count = firstStringMap[currentLetter];
      if (count) {
        // If it has, increment the count
        count += 1;
      } else {
        // If it hasn't, set the count to 1
        count = 1;
      }
  
      // Store the updated count in the hash map
      firstStringMap[currentLetter] = count;
    }
  
    // Loop through each character in the shorter string
    for (let str2Index = 0; str2Index < str2.length; str2Index++) {
      // Check if the current character is already in the hash map
      if (firstStringMap[str2[str2Index]]) {
        // If it is, decrement the counter
        count -= 1;
      } else {
        // If it isn't, increment the counter
        count += 1;
      }
    }
  
    // If the number of differences is less than 2, the strings are one edit away
    if (count < 2) {
      return true;
    } else {
      return false; 
    }
 };
  
  
  
  
// question 6 String compression: ex is taking string that is aabcccccaa into a2b1c5a2

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
           compressed += currentLetter + count;
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

// Question 7 Rotating a matrix by 90 degrees
        //      R
        //    C 1  2  3 4       m[row][col]      to start assign the corners" A:1 B:4 C:16 D:13
        //      5  6  7 8       for i             use a temp space to hold the value while swaping
        //      9 10 11 12      for j              t = b b=a a=t this is essentially switching 1 and 4 - and ends with A:4 as temp
        //      13 14 15 16     m[i][j]            t =C C=A A=T now we are switching the A:4 and C:16
        //                                         t=D D=A A=T last time to switch A:16 with D:13
        //
        //      In the next iteration we are moving 2->8->15-9 B will be first 4 then 8 then 12 , then in next iteraton we want it to be 7
        //       B => m[i=j][n-1-i]         n being the number of columns
        //  We want the next iteration to start a row down and also a column in && n-1 give you the last column but n-1-i give you a column in for the 2nd iteration 
        //      A => m[i][i=J] = this is how we get to all A vlaues and then also move one column in for 2nd iteration
        //      c=> m[n-1-i][n-1-i-j]    d=m[n-1-i-j][i]
        // Pattern shows that A's column = B's row
        // B's column = C'c row
        // C' column = D's row
        // A's row = 's column

        // i is for rows and we only need to use half the rows to  move the matrix 90 degrees
        // for i< math.floor(n/2) - if n is odd then there is a middle value that doesnt need to be moved- like in a 5x5 
        // for j<n-2i-1               the # of items in each row goes down     # 4 2 1
        //                              2 for every iteration of i             n 5 5 5
        //                                                                     i 0 1 2



        function rotateMatrix (m){
            let n = m.length;
          
            for (let i = 0; i < Math.floor(n / 2); i++) {
              for (let j = 0; j < n - (2 * i) - 1; j++) {
                let t = m[i + j][n - 1 - i];
                m[i + j][n - 1 - i] = m[i][i + j];
                m[i][i + j] = t;
          
                t = m[n - 1 - i][n - 1 - i - j];
                m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
                m[i][i + j] = t;
          
                t = m[n - 1 - i - j][i];
                m[n - 1 - i - j][i] = m[i][i + j];
                m[i][i + j] = t;
              }
            }
            return m;
    };



    // Q8- Zero Matrix Given an m x n integer matrix matrix , if an element is 0 , set its entire row and column to 0 's.

    function zeroMatrix(matrix) {
        let n = matrix.length; // # of rows
        let m = matrix[0].length; // # of columns

        // Mark an 0 as true in first iteration of the matrix
        // use r and c for row and columns DUHH

        for( let r=0; r<n; r++) {
            for(let c=0; c<m; c++){
                
                if( matrix[r][c] === 0 ) matrix[r][c] = true;
            }
        }

    // Zero out corresponding rows and columns
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (matrix[r][c] === true) {
                // Zero out row
                for (let i = 0; i < n; i++) {
                    matrix[i][c] = 0;
                }
                // Zero out column
                for (let j = 0; j < m; j++) {
                    matrix[r][j] = 0;
                }
            }
        }
        return matrix;
    }
    };

// Q9- String Rotation-check if one word is a substig of another 

function isSubstring(s1, s2) {

    if( s1.length !== s2.length) {
        return false
    }

    const s1s1 = s1 + s1;
    let result = s1s1.includes(s2);

    return result;
    
};
      

module.exports = { isUnique, permutation, urlIfy, palPer, oneAway, stringComp, rotateMatrix, zeroMatrix, isSubstring} 
