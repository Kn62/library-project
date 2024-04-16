const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
    console.log(this.title)
    console.log(this.author)
    console.log(this.pages)
    console.log(this.read)
}

// Array to hold the books

let myLibrary = [];

// Create a book


const displayBooks = function() {
    const bookContainer = document.querySelector('.book-container');
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    }

    myLibrary.forEach((book, index) => {    
        const newDivBook = document.createElement("div");
        newDivBook.setAttribute("class", "div-book"); 

        const newTitle = document.createElement("h2");
        newTitle.innerText = `${book.title}`;
        newDivBook.appendChild(newTitle);

        const newAuthor = document.createElement("p");
        newAuthor.innerText = `Author: ${book.author}`;
        newDivBook.appendChild(newAuthor);

        const newPages = document.createElement("p");
        newPages.innerText = `Pages: ${book.pages}`;
        newDivBook.appendChild(newPages);

        const newRead = document.createElement("p");
        newRead.setAttribute("class", "display-read")
        newRead.textContent = `${book.read ? "Already read" : "Not yet read"}`
        newDivBook.appendChild(newRead);

        const readButton = document.createElement("button");
        readButton.setAttribute("class", "mark-read");
        readButton.innerText = "Change Read Status";
        readButton.addEventListener("click", () => {
            book.toggleRead();
            newRead.innerText = `${book.read ? "Already read" : "Not yet read"}`
            newRead.classList.toggle("green")
            })
    
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-button");
        deleteButton.innerText = "Delete Book from Library";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayBooks();
        })

        newDivBook.appendChild(readButton);
        newDivBook.appendChild(deleteButton);

        bookContainer.appendChild(newDivBook);
    })
}

const addButton = document.querySelector(".add")
addButton.addEventListener("click", function(event){
    event.preventDefault()

    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    const readInput = document.querySelector("#read").checked;

    const newBook = new Book (titleInput, authorInput, pagesInput, readInput);

    myLibrary.push(newBook);
    displayBooks();

    //Reset form once book is added

    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    document.querySelector("#read").checked = false
})

