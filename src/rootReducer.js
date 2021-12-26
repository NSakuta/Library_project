import {combineReducers} from 'redux'
import booksReducer from './store/booksReducer'

const rootReducer = combineReducers({
    booksReducer
})

export default rootReducer;