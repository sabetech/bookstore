const ADD_BOOK = 'reducer/books/add_book';
const REMOVE_BOOK = 'reducer/books/remove_book';
const FETCH_EXISTING_BOOKS = 'reducer/books/fetch;';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JuAkGAOBr4qIxU2cbbq7';

const initialState = [];
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_EXISTING_BOOKS:
      return action.payload;

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

export function fetchBooks(payload) {
  return {
    type: FETCH_EXISTING_BOOKS,
    payload,
  };
}

export const fetchBooksApi = () => async (dispatch) => {
  try {
    const booksResponse = await fetch(`${baseUrl}/books`);
    const jsonResponse = await booksResponse.json();

    const bookObjects = Object.keys(jsonResponse).map((bookId) => (
      {
        id: bookId,
        title: jsonResponse[bookId][0].title,
        author: jsonResponse[bookId][0].author,
      }));

    dispatch(fetchBooks(bookObjects));
  } catch (e) {
    console.log(e);
  }
};

export const addBookApi = (payload) => async (dispatch) => {
  const { id, title, author } = payload;
  await fetch(`${baseUrl}/books`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'Fiction',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(addBook(payload));
};

export const removeBookApi = (id) => async (dispatch) => {
  await fetch(`${baseUrl}/books/${id}`,
    {
      method: 'DELETE',
    });

  dispatch(removeBook(id));
};
