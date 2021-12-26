import { useState } from "react"
import { connect } from "react-redux"
import { addBook } from "../store/actionCreator";
import { useHistory } from "react-router-dom";


const AddBook = ({addNewBook, loading}) => {

const history = useHistory();

const [book, setBook] = useState({
    title: '',
    shortDescription: '',
    authors: '',
    thumbnailUrl: '',
    longDescription: ''
});

function changeFieldHandler(e) {
    setBook({...book, [e.target.name]: e.target.value})
}

function onSubmitHandler(e) {
    e.preventDefault();
    console.log('addBook - book: ', book)
    addNewBook({...book, id: Date.now(), like: 0, dislike: 0, rating: 0, comments: []});
    setBook({
        title: '',
        shortDescription: '',
        authors: '',
        thumbnailUrl: '',
        longDescription: '',
    })

    history.push('/books')
    }

    return(
        <div className="container text-center">
            <h1 className="my-5">Add your book</h1>
            <h3>Please fill all fields</h3>
            {loading ? <div className="text-center mt-5">
                            <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> : <><div className="container w-800">
            <form onSubmit={onSubmitHandler}>
                <input
                    className="form-control my-3"
                    type="text"
                    name="title"
                    placeholder="Type album title"
                    value={book.title}
                    onChange={changeFieldHandler}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="authors"
                    placeholder="Author"
                    value={book.authors}
                    onChange={changeFieldHandler}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="thumbnailUrl"
                    placeholder="Cover"
                    value={book.thumbnailUrl}
                    onChange={changeFieldHandler}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="shortDescription"
                    placeholder="Short description"
                    value={book.shortDescription}
                    onChange={changeFieldHandler}
                />
                <textarea
                    className="form-control my-3"
                    type="text"
                    name="longDescription"
                    placeholder="Description"
                    value={book.longDescription}
                    onChange={changeFieldHandler}
                />
                <button type='submit' className="btn btn-info w-100">add</button>
            </form>
        </div></>}
            
    </div>
    )
}

function mapStateToProps({booksReducer}){
    return {
        loading: booksReducer.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewBook: (data) => dispatch(addBook(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
