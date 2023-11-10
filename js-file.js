const openDialogButton = document.querySelector("#open-dialog-button");
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("#add-book-button");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read");
const unreadInput = document.querySelector("#unread");
const unread = document.querySelector('#unread');
const dialogWrapper = document.querySelector(".dialog-wrapper");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.info = function() {
        if (read) {
            return `${title} by ${author}, ${pages} pages, read.`
        }
        else {
            return `${title} by ${author}, ${pages} pages, not read yet.`
    }
};}

function addBookToLibrary(book) {
    return myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 321, "read");
const theBible = new Book("The Bible", "Jesus", 5000, "unread");
const thingsFallApart = new Book("Things fall apart", "Chinua Achebe", 319, "read");

addBookToLibrary(theHobbit);
addBookToLibrary(theBible);
addBookToLibrary(thingsFallApart);

function createBookCard(book) {
    const bookCard = document.createElement("div");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const pagesText = document.createElement("p");
    const readText = document.createElement("p");
    const removeButton = document.createElement("button");
    const readStatusButton = document.createElement("button");
    const bookGrid = document.querySelector(".book-grid");
    removeButton.textContent = "Remove";
    bookCard.classList.add("book-card");
    readStatusButton.textContent = "Change read status";
    removeButton.classList.toggle("book-card-button");
    readStatusButton.classList.toggle("book-card-button");
    titleText.textContent = book.title;
    authorText.textContent = book.author;
    pagesText.textContent = book.pages;
    readText.textContent = book.read;
    bookCard.setAttribute("data", myLibrary.indexOf(book));
    bookCard.appendChild(titleText);
    bookCard.appendChild(authorText);
    bookCard.appendChild(pagesText);
    bookCard.appendChild(readText);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(readStatusButton);
    bookGrid.appendChild(bookCard);

    removeButton.addEventListener("click", () => {
        myLibrary.splice(bookCard.attributes.data.value, 1);
        bookCard.setAttribute("data", myLibrary.indexOf(book));
        while (bookGrid.firstChild) {
            bookGrid.removeChild(bookGrid.lastChild);
          }
        myLibrary.forEach(createBookCard);
    });

    readStatusButton.addEventListener("click", () => {
        book.read === "read" ? book.read = "unread" : book.read = "read";
        readText.textContent = book.read;
    })
};

myLibrary.forEach(createBookCard);

openDialogButton.addEventListener("click", () => {
    dialog.showModal();
});

addBookButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    let read = "read";
    if (unreadInput.checked) {read = "unread"};
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    createBookCard(newBook);
    // dialogWrapper.removeChild(dialog);
});