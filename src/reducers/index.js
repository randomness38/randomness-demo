import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import * as types from '../actions/actionTypes'


const IsCompleted = (state = { completed: false, id:"" }, action) => {
  switch(action.type) {
    case 'ACTIVITY_COMPLETED':
      return {
        // ...state,
        completed: true,
        id: action.id
      };

    case 'ACTIVITY_RESET':
      return {
        // ...state,
        completed: false,
        id: action.id
      };

    default:
      return state
  }
};


const reducers = {
  IsCompleted,
  form: formReducer
};

export default combineReducers(reducers);
