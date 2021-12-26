import { useHistory } from "react-router-dom"

export default function Book({ book }) {

    const history = useHistory();

    return (
        <div className="card mx-2 my-2 p-2" style={{width: '13rem'}}>
            <div className ="card-body">
            <img src={book.thumbnailUrl} className="card-img-top" alt="..."/>
            </div>
                <h5 className ="card-title">{book.title}</h5>
                <p className ="card-text">{book.shortDescription}</p>
                <button onClick={() => {
                    history.push(`/books/${book.isbn}`)}
                } className ="btn btn-info">View details</button>
        </div>
    )
}