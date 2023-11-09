const  newBookButton = document.querySelector(".new-book-button");
const dialog = document.querySelector("dialog");
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        if (read === read) {
            return `${title} by ${author}, ${pages} pages, read.`
        }
            return `${title} by ${author}, ${pages} pages, not read yet.`
    }
};

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 321, "read");
const theBible = new Book("The Bible", "Jesus", 5000, "unread");
const thingsFallApart = new Book("Things fall apart", "Chinua Achebe", 319, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(theBible);
addBookToLibrary(thingsFallApart);

myLibrary.forEach(function(book) {
    bookGrid = document.querySelector(".book-grid")
    const bookCard = document.createElement("div");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");
    bookCard.setAttribute("style", "padding: 16px; border: 1px solid grey; border-radius: 20px;")
    titleText.textContent = book.title;
    authorText.textContent = book.author;
    pagesText.textContent = book.pages;
    readText.textContent = book.read;
    bookCard.appendChild(titleText);
    bookCard.appendChild(authorText);
    bookCard.appendChild(pagesText);
    bookCard.appendChild(readText);
    bookGrid.appendChild(bookCard);
});

newBookButton.addEventListener("click", () => {
    dialog.showModal();

})