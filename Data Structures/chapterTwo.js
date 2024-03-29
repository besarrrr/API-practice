// Linked List 

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
    }
}  
     
// Q1 Remove Dups 

function removeDups(head) {

    const seenValues = new Set(); // this is use to keep track of the values seen 
    let current = head; // This initializes a current variable to point to the first node of the linked list.
    let previous = null; // initializes a previous variable to null, which will be used to keep track of the previous node in the list.

    while ( current != null) {
        if (seenValues.has(current.value)) {
            previous.next = current.next; //  If the current value has been seen, this line removes the current node by updating the next property of the previous node to skip the current node. 
        } else {
            seenValues.add(current.value);
            previous = current; // This updates the previous variable to point to the current node, which will be used to remove the next duplicate node (if there is one).
        }
        current = current.next;; // updates the current variable to point to the next node in the list.
    }

    return head; //returns linked list without dups 
    
};

// Q2 return the kth to last element of a singly linked list

function kthToLast(head, k) {
    let p1 = head;
    let p2 = head;
    
    // Move p2 k nodes ahead
    for (let i = 0; i < k; i++) {
      if (p2 == null) {
        return null; // The linked list has less than k nodes
      }
      p2 = p2.next;
    }
    
    // Move p1 and p2 simultaneously
    while (p2 != null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    
    // p1 is now pointing to the kth to last element
    return p1.value;
};

// Q3 delete middle node

function deleteMiddleNode(head) {
    let fastPointer = head;
    let slowPointer = head;
    let prev = null;

    while (fastPointer != null && fastPointer.next != null) {
        prev = slowPointer; // keep track of the node before the middle node
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    } // this has the fast and slow apporach to get to the middle of the linked list

    prev.next = slowPointer.next; //  change the next pointer of the previous node to point to the next node after the middle node
    
    //  ex 123  2= slowpointer/prev 3 = slow pointer.next/prev.
    // slowPointer moves to the middle node, prev is updated to point to the node before it. Then, once we have found the middle node, 
    // we update the next pointer of the previous node to point to the next node after the middle node.

    // return the new linked list 
 
    return head;
};

// Partition   

function partition(head, x) {


    let Front = null;
    let Back = null;


    while( head != null ) {
        let next = head.next;
        if(head.value < x) {
            head.next = Front;
            Front = head;
        } else {
            head.next = Back;
            Back = head;
        }
        head = next;
    }
    if (Front == null) {
        return Back;
      }
      let current = Front;
      while (current.next != null) {
        current = current.next;
      }
      current.next = Back;
      return Front;

};

// Sum List

function sumLists(x,y) {

    if(x == null && y == null){
        return null;
    }

    let node1 = x;
    let node2 =y;
    
    let carryOver = 0;

    while ( node1 !== null && node2 !== null) {

        let sum;

        if (node1 == null){
            sum = node2.value
        } else if (node2 == null){
            sum = node1.value
        } else {
            sum = node1.value + node2.value
        };
    
        node1.value = ((sum >= 10 ? sum - 10: sum) + carryOver);

        if ( sum >= 10) {
            carryOver = 1;
        } else {
            carryOver = 0;
        };

        node1 = node1.next;
        node2 = node2.next;

    };

    return x; // writing over one of the list instead of returning a new one

};

// Palindrome

// Helper function outside of the main function to reverse list 
function reverseList(head) {
    let current = head;
    let previous = null;
    let next;
    
        while (current !== null) {
          next = current.next;
          current.next = previous;
          previous = current;
          current = next;
        }
        return previous;
};

function isPalindrome(head) {

    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }

    let middle = reverseList(slow);

    while(length) {
        length--;
        if(middle.value !== startPointer.value) return false;
        middle = middle.next;
        startPointer = startPointer.next;
    }

    return true;

};

   
module.exports = { removeDups, kthToLast, deleteMiddleNode, partition, sumLists, isPalindrome}; 