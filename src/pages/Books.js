import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import InputBook from '../components/InputBook';
import { fetchBooksApi } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksApi());
  }, [dispatch]);

  return (
    <div>
      <BookList books={books} />
      <InputBook />
    </div>
  );
}

export default Books;
