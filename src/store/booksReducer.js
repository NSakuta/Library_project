import Types from "./actionTypes";
import * as BooksData from '../data/BooksData'

const initialState = {
    error: null,
    loading: false,
    allBooks: [],
    topBooks: []
}


export default function booksReducer(state = initialState, {type, payload}) {

    switch(type) {
        case Types.initState: return {
            ...state, 
            loading: false,
            allBooks: [...payload.allBooks]
        }
        case Types.addBook: return {
            ...state,
            allBooks: [...state.allBooks, payload],
            loading: false
        }
        case Types.load: return {
            ...state,
            loading: true,
            error: false
        }
        case Types.error: return {
            ...state,
            error: true,
            loading: false
        }
        case Types.updateBook: return {
            ...state,
            allBooks: payload.allBooks
        }
        case Types.topBooks: return {
            ...state, 
            loading: false,
            topBooks: [...payload.topBooks]
        }

        default: return state;
    }
}