const addButton = document.querySelector(".add")
const bookContainer = document.querySelector(".book-container")

const myLibrary = [];


// Create a book

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readTest = function(read) {
        if (read === true) {
            return "Already read"
        } else {
            return "Not read yet" 
        }
    };
    this.readOrNot = this.readTest(read);
}


// Add book to Library

const addBookToLibrary = function(book) {
    myLibrary.push(book);
}

const displayLibrary = function(book) {    
    const newDivBook = document.createElement("div");
    newDivBook.setAttribute("class", "div-book"); 

    const newTitle = document.createElement("h2");
    newTitle.innerText = `Title: ${book.title}`;
    newDivBook.appendChild(newTitle);

    const newAuthor = document.createElement("p");
    newAuthor.innerText = `Author: ${book.author}`;
    newDivBook.appendChild(newAuthor);

    const newPages = document.createElement("p");
    newPages.innerText = `Pages: ${book.pages}`;
    newDivBook.appendChild(newPages);

    const newRead = document.createElement("p");
    newRead.innerText = `${book.readOrNot}`;
    newDivBook.appendChild(newRead);

    const readButton = document.createElement("button");
    readButton.setAttribute("class", "mark-read");
    readButton.innerText = "Mark as Read";
    newDivBook.appendChild(readButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button")
    deleteButton.innerText = "Delete Book from Library"; 
    newDivBook.appendChild(deleteButton);

    bookContainer.appendChild(newDivBook);
}


addButton.addEventListener("click", function(event){
    event.preventDefault()

    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const readInput = document.querySelector("#read").checked;

    const newBook = new Book (titleInput, authorInput, pagesInput, readInput);

    addBookToLibrary(newBook);
    displayLibrary(newBook);

    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    document.querySelector("#read").checked = false

    console.log(myLibrary)
})

