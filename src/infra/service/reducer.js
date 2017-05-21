import { combineReducers } from 'redux';

const todo = (state = {
  list: [],
}, action) => {
  switch (action.type) {
    case 'TODO_SET':
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export default combineReducers({
  todo,
});
