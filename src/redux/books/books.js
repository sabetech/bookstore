const ADD_BOOK = 'reducer/books/add_book';
const REMOVE_BOOK = 'reducer/books/remove_book';

const initialState = [];
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default: return state;
  }
}

// Action Creators
export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, payload: id };
}