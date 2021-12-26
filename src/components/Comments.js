import { useEffect } from "react"
import { connect } from "react-redux"
import { initState } from "../store/actionCreator"
import Comment from "./Comment"

const Comments = ({bookId, books, initial}) => {

    useEffect(() => {
        if(books.length === 0) {
            initial()
        }
    }, [])

    const book = books.find(el => el.isbn === bookId);

    return (
        <div>
            {book.comments.map(el => <Comment comment={el}></Comment>)}
        </div>
    )
}

function mapStateToProps({booksReducer}) {
    return {
        books: booksReducer.allBooks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initial: () => dispatch(initState())
    }
}
export default connect(mapStateToProps)(Comments);