import Navigation from './components/Navigation';
import Pages from './components/Pages';
import {getAllBooks, updateBooksInLocalStorage} from './data/BooksData'



function App() {


    //   const array = getAllBooks();
    //   console.log(array)


    // function createkeys() {
    //   const newArr = array.map(el => Object.assign(el, {like: 0, dislike: 0, rating: 0, comments: []})
    //   )
    //   return newArr;
    // }


    // updateBooksInLocalStorage(createkeys()) 

  return (
    <div className="App">
      <Navigation></Navigation>
      <Pages></Pages>
    </div>
  );
}
export default App;
