const library = []

function Book(title, author, pages, read){

    //Attributes
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    //Methods
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet"}`;
    }

    this.setId = (id) => {      
        this.id = id;
    }
}

Book.prototype.toggleRead = () => {
    this.read = !this.read;
}

function openDialog(){
    document.querySelector('.add-book-container').showModal();
}

function addBookToLibrary(){
    const form = document.querySelector('.book-form')

    let formData = new FormData(form)
    let data = Object.fromEntries(formData)

    let book = new Book(data.title, data.author, data.pages, data.read === "on" ? true : false)

    library.push(book)
    book.setId(library.length - 1)
}

function removeBookFromLibrary(e){
    let card = e.parentNode.parentNode
    let id = card.id

    delete library[id]
    displayBooks()
}

function displayBooks(){
    const container = document.querySelector('.card-container')

    container.innerHTML = ''
    library.forEach((book) => {
        container.innerHTML += 
        `
            <div class="card" id="${book.id}">
                <div class="title">
                    <h2>${book.title}</h2>
                </div>
                <div class="author">
                    <h3>Author:</h3>
                    <p>${book.author}</p>
                </div>
                <div class="page-number">
                    <h3>Pages:</h3>
                    <p>${book.pages}</p>
                </div>
                <div class="buttons">
                    <button class="read-button">Read</button>
                    <button class="delete-button" onclick="removeBookFromLibrary(this)">Delete</button>
                </div>
            </div>
        `
    })
}