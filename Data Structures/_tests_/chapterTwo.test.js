const { removeDups } = require("../chapterTwo.js")

// Q1 Test

test("Remove duplicates from a linked list", () => {

    class Node {
        constructor(val, next=null) {
            this.val = val;
            this.next = next;
        }
    }
    
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
