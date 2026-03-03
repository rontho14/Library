let myLibrary = [
  {
    id: 1,
    title: "Jesus in the Talmud",
    author: "Peter Schafer",
    status: false,
  },
  { id: 2, title: "Atomic Habits", author: "James Clear", status: true },
  { id: 3, title: "Death in Midsummer", author: "Yukio Mishima", status: true },
  {
    id: 4,
    title: "The Myth of Artificial Intelligence",
    author: "Erik Larson",
    status: false,
  },
  {
    id: 5,
    title: "The Four Pillars of Investing",
    author: "William Bernstein",
    status: false,
  },
];

function Book(id, title, author, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.status = status;
}

function addBookToLibrary(title, author, status) {
  let book = new Book(crypto.randomUUID(), title, author, status);
  myLibrary.push(book);
}

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
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
        <img src="./images/jesusInTheTalmud.jpg" />
        <div class="status">
            <input type="checkbox" id="bookStatus" data-id='${book.id}' />
            <label for="bookStatus">To-read</label>
            <div class="delete-button" data-id='${book.id}'>
                <button id="deleteButton" onClick="deleteBook(${book.id})">
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

addBookButton.addEventListener("click", (e) => {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const status = document.getElementById("bookStatus");
  const bookImg = document.getElementById("imageUpload");
  const form = document.querySelector("form");

  if (title === "" || author === "") {
    e.preventDefault();
    form.classList.add("show-errors");
    return;
  }

  addBookToLibrary(title, author, status, bookImg.files[0]);
  formReset();
  showBooks(myLibrary);
});

showBooks(myLibrary);
