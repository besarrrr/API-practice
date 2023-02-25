const { removeDups, kthToLast } = require("../chapterTwo.js")

// delcaring a node class

class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
};


// Q1 Test

test("Remove duplicates from a linked list", () => {

   
    const head = new Node(6);
    head.next = new Node(10);
    head.next.next = new Node(12);
    head.next.next.next = new Node(3);
    head.next.next.next.next = new Node(12);
    head.next.next.next.next.next = new Node(10);


    const expectedOutput = new Node(6);
    expectedOutput.next = new Node(10);
    expectedOutput.next.next = new Node(12);
    expectedOutput.next.next.next = new Node(3);

    expect(removeDups(head)).toEqual(expectedOutput);

});

//Q2

test(" return the kth to last element of a singly linked list", () => {

   
    const head = new Node(6);
    head.next = new Node(10);
    head.next.next = new Node(12);
    head.next.next.next = new Node(3);
    head.next.next.next.next = new Node(12);
    head.next.next.next.next.next = new Node(10);



    expect(kthToLast(head,3)).toEqual(3);

});
