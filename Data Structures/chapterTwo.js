// Linked List 

// Q1 Remove Dups

function removeDups(head) {

    const seenValues = new Set(); // this is use to keep track of the values seen 
    let current = head; // This initializes a current variable to point to the first node of the linked list.
    let previous = null; // initializes a previous variable to null, which will be used to keep track of the previous node in the list.

    while ( current != null) {
        if (seenValues.has(current.val)) {
            previous.next = current.next; //  If the current value has been seen, this line removes the current node by updating the next property of the previous node to skip the current node. 
        } else {
            seenValues.add(current.val);
            previous = current; // This updates the previous variable to point to the current node, which will be used to remove the next duplicate node (if there is one).
        }
        current = current.next;; // updates the current variable to point to the next node in the list.
    }

    return head; //returns linked list without dups 
    
};

// Q2 return the kth to last element of a singly linked list

function kthToLast(head, k) {

};



module.exports = { removeDups, kthToLast, }