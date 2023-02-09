 
function Book( title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return ` ${this.title}, ${this.author}, ${this.pages} pages, Read: ${this.read}`
    }

}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'yes')


console.log(theHobbit.info());

//  would put out   The Hobbit, J.R.R. Tolkien, 295 pages, Read: yes


//Second way to write it: 

//  function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     const bookTitle = this.title;
//     const bookAuthor = this.author;
//     const bookPages = this.pages;
//     const bookRead = this.read;

//     this.info = function() {
//         return `${bookTitle}, ${bookAuthor}, ${bookPages} pages, Read: ${bookRead}`;
//     };
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'yes');
// console.log(theHobbit.info());