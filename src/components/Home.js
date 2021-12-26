import { useEffect } from "react"
import { connect } from "react-redux"
import { initState } from "../store/actionCreator"
import Book from "./Book"
import * as BooksData from '../data/BooksData'
import Loader from "./Loader"

const Home = ({ allBooks, loading, initial}) => {

    useEffect(() => {  
        if(allBooks.length === 0)
        initial()
        // eslint-disable-next-line
    }, [allBooks])   
    
    
    function sortingBooksByRating() {
        const books = [...allBooks];
    
        let maxIdx, temp, 
            len = books.length;
        for(let i = 0; i < len; i++){
            maxIdx = i;
                for(let  j = i+1; j<len; j++){
                if(books[j].rating > books[maxIdx].rating){
                maxIdx = j;
                }
            }
        temp = books[i];
        books[i] = books[maxIdx];
        books[maxIdx] = temp;
        }
        return books;
    }

    function getTop5Books() {
    
        const topBooks = sortingBooksByRating();
        let top5Books = [];
    
        for(let i = 0; i < 5; i++) {
            top5Books[i] = topBooks[i];
        }

        BooksData.setTopBooksToLocalStorage(top5Books);

        return top5Books;
    }

    const top5 = getTop5Books();
     

    return (
        allBooks.length === 0 ? <Loader></Loader> : <div>
            <div className="text-center">
                <h1 className="my-5">Welcome to the book library</h1>
                <h2 className="my-5">Top 5 books</h2>
            </div>
            {loading ?  <div className="text-center mt-5">
                            <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : <>
                <div className="container w-1000 d-flex justify-content-between flex-wrap">
                    {top5.map(book => <Book key = {book.isbn} book={book}></Book>)}
                </div></>}

        </div>
    )
}

function mapStateToProps({ booksReducer }) {
    return {
        allBooks: booksReducer.allBooks,
        loading: booksReducer.loading
    }

}

function mapDispatchToProps(dispatch) {
    return {
        initial: () => dispatch(initState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)




