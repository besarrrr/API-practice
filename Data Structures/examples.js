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



// Queston 1: Is Unique

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
// Area of consusion is how the empty object gets the iterated keys in it??