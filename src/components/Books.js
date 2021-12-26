import { useEffect } from "react"
import { connect } from "react-redux"
import { initState } from "../store/actionCreator"
import Book from "./Book";

const Books = ({initial, books, loading}) => {

    useEffect(() => {  // отслеживается все параметры в Initial state
        if(books.length === 0)
        initial()
        // eslint-disable-next-line
    }, [])

    return(
        <div>
            <div className="container text-center">
            <h1 className="my-5">All books</h1>
            </div>
            {loading ? <div className="text-center mt-5">
                            <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : <div className="container w-1000 d-flex justify-content-between flex-wrap">{books.map((el, index) => <Book key = {index} book = {el}></Book>)}</div>}
        </div>
    )  
}

function mapStateToProps({booksReducer}) {
    return {
        books: booksReducer.allBooks,
        loading: booksReducer.loading
    }
    
}

function mapDispatchToProps(dispatch) {
    return {
        initial: () => dispatch(initState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)