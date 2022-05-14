import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  books,
  categories,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
