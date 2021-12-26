import { Route, Switch } from 'react-router-dom';
import BookInfo from './BookInfo';
import Books from './Books';
import AddBook from './AddBook';
import Home from './Home';

export default function Pages() {
    return(
        <Switch>
            <Route path ='/books/:id' component={BookInfo}></Route>
            <Route path ='/books' component={Books}></Route>
            <Route path ='/add-book' component={AddBook}></Route>
            <Route exact path ='/' component={Home}></Route>
        </Switch>
    )
}