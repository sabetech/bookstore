import React from "react";
import styles from "../modules/BookItem.module.css";

const BookItem = ({ book }) => {
    const { title, author } = book;
    return (
        <li className={styles.item}> 
            <div >
              { title } - { author }
              <button >Delete</button>  
            </div>
        </li>
        );
}

export default BookItem;