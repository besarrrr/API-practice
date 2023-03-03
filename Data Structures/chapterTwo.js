// Linked List 
     
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

function partition(head, p) {

// make two different new linked listed


// then go back to the linked list and compare < > to decide where the values go in the new linked lists

//combine the two new lists


// return new list

};
 


module.exports = { removeDups, kthToLast, deleteMiddleNode, partition };