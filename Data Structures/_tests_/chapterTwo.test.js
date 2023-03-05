const { removeDups, kthToLast, deleteMiddleNode, partition } = require("../chapterTwo.js")

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
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

    expect(kthToLast(head, 3)).toBe(3);

});

// Q3 Test

test("Remove middle node", () => {

    const head = new Node(6);
    head.next = new Node(10);
    head.next.next = new Node(12);
    head.next.next.next = new Node(3);
    head.next.next.next.next = new Node(12);
    head.next.next.next.next.next = new Node(10);
    head.next.next.next.next.next.next = new Node(15);


    const expectedOutput = new Node(6);
    expectedOutput.next = new Node(10);
    expectedOutput.next.next = new Node(12);
    expectedOutput.next.next.next = new Node(12);
    expectedOutput.next.next.next.next = new Node(10);
    expectedOutput.next.next.next.next.next = new Node(15);
    

    expect(deleteMiddleNode(head)).toEqual(expectedOutput);

});

// Q4 Partition 

test("Partion around X", () => {

    const head = new Node(6);
    head.next = new Node(10);
    head.next.next = new Node(12);
    head.next.next.next = new Node(3);
    


    const expectedOutput = new Node(6);
    expectedOutput.next = new Node(3);
    expectedOutput.next.next = new Node(10);
    expectedOutput.next.next.next = new Node(12);
    
    expect(partition(head, 6).toEqual(expectedOutput));

    
});
