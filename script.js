const myLibrary = [
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

function showBooks() {
  const section = document.querySelector(".books");
  section.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    bookCard.innerHTML = `
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <img src="./images/jesusInTheTalmud.jpg" />
        <div class="status">
            <input type="checkbox" id="bookStatus" />
            <label for="bookStatus">To-read</label>
        </div>
    `;

    section.appendChild(bookCard);
  });
}

showBooks();