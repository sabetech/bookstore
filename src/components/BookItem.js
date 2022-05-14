import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';
import styles from '../modules/BookItem.module.css';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    dispatch(removeBookApi(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.bookInfo}>
        <div className={styles.bookTitle}>
          { title }
        </div>
        <div className={styles.bookAuthor}>
          { author }
        </div>
        <ul className={styles.actionLinks}>
          <li>
            <button type="button">Comments</button>
            {' '}
            |
          </li>
          <li className={styles.actionLinkItem}>
            <button type="button" onClick={(e) => handleDelete(e, id)}>Remove</button>
            {' '}
            |
          </li>
          <li className={styles.actionLinkItem}>
            <button type="button">Edit</button>
          </li>
        </ul>
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
