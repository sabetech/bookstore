const CHECK_STATUS = 'reducer/categories/check_status';

// Reducer
const initialState = { status: '' };
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return {
        ...state,
        status: 'Under construction',
      };
    default: return state;
  }
}

// Action Creators
export function checkStatus() {
  return { type: CHECK_STATUS };
}
