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

}

function openDialog(){
    document.querySelector('.add-book-container').showModal();
}

function addBookToLibrary(){
    const form = document.querySelector('.book-form')

    let formData = new FormData(form)
    let data = Object.fromEntries(formData)

    library.push(new Book(data.title, data.author, data.pages, data.read))
}