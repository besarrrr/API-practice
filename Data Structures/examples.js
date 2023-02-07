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