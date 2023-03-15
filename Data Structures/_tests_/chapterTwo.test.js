const { removeDups, kthToLast, deleteMiddleNode, partition, sumLists } = require("../chapterTwo.js")

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
    
     const expectedOutput = new Node(3);
     expectedOutput.next = new Node(12);
     expectedOutput.next.next = new Node(10);
     expectedOutput.next.next.next = new Node(6);
    
     expect(partition(head, 6)).toEqual(expectedOutput);
});


// Q4 Sum Lists

test("Sumlists", ()=> {

    const x = new Node(9);
    x.next = new Node(2);
    x.next.next = new Node(3);

    const y = new Node(3);
    y.next = new Node(2);
    y.next.next = new Node(3);

    const expectedOutput = new Node(2);
    expectedOutput.next = new Node(5);
    expectedOutput.next.next = new Node(6);

    expect(sumLists(x,y)).toEqual(expectedOutput);


});


// Q4 Sum Lists Q2

test("Sumlists", ()=> {

    const x = new Node(0);
    x.next = new Node(7);
    x.next.next = new Node(2);

    const y = new Node(9);
    y.next = new Node(8);
    y.next.next = new Node(9);

    const expectedOutput = new Node(9);
    expectedOutput.next = new Node(5);
    expectedOutput.next.next = new Node(2);
   // expectedOutput.next.next.next = new Node(1);
  

    expect(sumLists(x,y)).toEqual(expectedOutput);

});
