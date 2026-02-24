const myLibrary = [];

function Book(id, name, author, status) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(name, author, status) {
    let book = new Book(crypto.randomUUID(), name, author, status);
    myLibrary.push(book);
}

function showBooks() {
    while (myLibrary.length > 0) {
        
    }
}