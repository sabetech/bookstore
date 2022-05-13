import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from '../modules/BookItem.module.css';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    dispatch(removeBook(id));
  };

  return (
    <li className={styles.item}>
      <div>
        { title }
        -
        { author }
        <button type="button" onClick={(e) => handleDelete(e, id)}>Delete</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
