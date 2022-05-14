import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const myBook = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBookApi(myBook));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Book" name="title" className="input-text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Add Author" name="author" className="input-text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};
export default InputBook;
