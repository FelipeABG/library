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
