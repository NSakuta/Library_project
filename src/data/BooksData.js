export function getAllBooks() {
    const books = JSON.parse(localStorage.getItem('books'))
    return books;
}

export function addNewBookToLocalStorage(book){
    const books = [...getAllBooks(), book];
    localStorage.setItem('books', JSON.stringify(books))}

export function updateBooksInLocalStorage(newBooks){
    return localStorage.setItem('books', JSON.stringify(newBooks))
}

export function getTopBooksFromLocalStorage(){
    return JSON.parse(localStorage.getItem('topBooks')) || [];
}
export function setTopBooksToLocalStorage(array){
    return localStorage.setItem('topBooks', JSON.stringify(array));
}