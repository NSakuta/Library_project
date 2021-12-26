import Types from "./actionTypes";
import * as BooksData from '../data/BooksData';

export function initState(){
    return dispatch => {
        dispatch({type: Types.load})
        setTimeout(()=> {
            try{
            const data = {
                allBooks: BooksData.getAllBooks(),
            }
            dispatch({type: Types.initState, payload: data})

            } catch (e) {
                dispatch({type: Types.error, payload: e.message})
            }
        }, 2000)
    }
}

export function addBook(data) {
    return dispatch => {
        dispatch({type: Types.load})

        setTimeout(() => {

            try {
                const newBook = createNewBook(data);
                dispatch({type: Types.addBook, payload: newBook})

            } catch (e) {

                dispatch({type: Types.error, payload: e.message})
            }
        }, 2000)
    }
}

export function updateBooks(id, key){

    const newBooks = addEvaluation(id, key);
    console.log('books from addEvalution: ', newBooks)

    return {
        type: Types.updateBook,
        payload: {allBooks: [...newBooks]}
    }
}

export function getTopBooks(){

    return dispatch => {
        dispatch({type: Types.load})
        setTimeout(()=> {
            try{
                const data = {
                    topBooks: BooksData.getTopBooksFromLocalStorage()
            }
            console.log('data: ', data)
                dispatch({type: Types.topBooks, payload: {...data}})

            } catch (e) {
                dispatch({type: Types.error, payload: e.message})
            }
        }, 2000)
    }
}
export function addComment(id, comment){
    return dispatch => {
        dispatch({type: Types.load})
        setTimeout(() => {
            try{
                const newBooks = _addComment(id, comment);
                dispatch({type: Types.initState, payload: newBooks})
            } catch (e) {
                dispatch({type: Types.error, payload: e.message})
            }
           
        }, 2000)
    }
}

function _addComment(id, newComment) {
    const books = BooksData.getAllBooks();
    const index = books.findIndex(el => el.isbn === id);
    console.log('index: ', index)
    books[index].comments.push(newComment);
    BooksData.updateBooksInLocalStorage(books);
    return books;

}

function createNewBook(book) {

    const books = BooksData.getAllBooks();
    book = {...book, isbn: Date.now()}

    books.push(book);
    BooksData.updateBooksInLocalStorage(books);

    return book;
}

function addEvaluation(id, key) {
    const books = [...BooksData.getAllBooks()];
    const index = books.findIndex(el => el.isbn === id);
    books[index][key]++
    books[index].rating = books[index].like - books[index].dislike
    
    BooksData.updateBooksInLocalStorage(books);
    return books; 
}




