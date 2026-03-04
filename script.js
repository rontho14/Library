function Book(id, title, author, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.status = status;
}

Book.prototype.toggleStatus = function () {
  this.status = !this.status;
};

let myLibrary = [
  {
    id: '1',
    title: "The Bible II",
    author: "Jesus Christ",
    status: false,
  }
].map((b) => new Book(b.id, b.title, b.author, b.status));

function addBookToLibrary(title, author, status) {
  let book = new Book(crypto.randomUUID(), title, author, status);
  myLibrary.push(book);
}

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  showBooks(myLibrary);
}

function changeStatus(id) {
  const book = myLibrary.find((book) => book.id == id);
  book.toggleStatus();
  showBooks(myLibrary);
}

function showBooks(arr) {
  const section = document.querySelector(".books");
  section.innerHTML = "";

  arr.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookCard.innerHTML = `
        <div data-id='${book.id}'></div>
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <img src="./images/book.png" />
        <div class="status">
            <input type="checkbox" id="bookStatus" ${book.status ? "checked" : ""} onclick="changeStatus('${book.id}')"' />
            <label for="bookStatus" onClick="checkStatus(${book})">${book.status ? "Read" : "To-read"}</label>
            <div class="delete-button" data-id='${book.id}'>
                <button id="deleteButton" onClick="deleteBook('${book.id}')">
                    <img src="images/delete-svgrepo-com.svg" alt="delete">
                </button>
            </div>
        </div>
        
    `;

    section.appendChild(bookCard);
  });
}

let openModal = document.querySelector("#add-button");
let closeModal = document.querySelector(".close-form-button");
let addBookButton = document.querySelector("#addBook");
const dialog = document.getElementById("addBookModal");

openModal.addEventListener("click", () => {
  dialog.showModal();
});

function formReset() {
  const form = document.querySelector("form");
  form.classList.remove("show-errors");
  form.reset();
}

closeModal.addEventListener("click", () => {
  formReset();
  dialog.close();
});

let checkbox = document.getElementById("modalBookStatus");
let label = document.getElementById("statusLabel");

checkbox.addEventListener('click', () => {
  label.textContent = checkbox.checked ? "read" : "to-read";
});

addBookButton.addEventListener("click", (e) => {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const form = document.querySelector("form");
  let status = false;

  if (title == "" || author == "") {
    e.preventDefault();
    form.classList.add("show-errors");
    return;
  }

  if (checkbox.checked) {
    status = true;
  }

  addBookToLibrary(title, author, status);
  formReset();
  showBooks(myLibrary);
  console.log(myLibrary);
});

showBooks(myLibrary);
