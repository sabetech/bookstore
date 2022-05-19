import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';
import styles from '../modules/BookItem.module.css';
import './bookitem.css';

const BookItem = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    dispatch(removeBookApi(id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.bookInfo}>
        <div className={styles.genre}>
          Thriller
        </div>
        <div className={styles.bookTitle}>
          { title }
        </div>
        <div className={styles.bookAuthor}>
          { author }
        </div>
        <ul className={styles.actionLinks}>
          <li>
            <button type="button" className={styles.comments}>Comments</button>
          </li>
          <li className={styles.actionLinkItem}>
            <button type="button" className={styles.buttonLink} onClick={(e) => handleDelete(e, id)}>Remove</button>
          </li>
          <li className={styles.actionLinkItem}>
            <button type="button" className={styles.buttonLink}>Edit</button>
          </li>
        </ul>
      </div>
      <div className={styles.progressInfo}>
        <div className="circle-bar" />
        <div className={styles.progressSubInfo}>
          <p className={styles.progressPercent}>
            64%
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.vl} />
      <div className={styles.chapterInfo}>
        <div className={styles.chapterSubInfo}>
          <p className={styles.currentChapter}>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button type="button" className={styles.buttonProgress}>UPDATE PROGRESS</button>
        </div>
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
