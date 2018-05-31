import * as types from '../actions/actionTypes'

export const duration = (state = 5, action) => {
  switch (action.type) {
    case types.CHANGE_ACTIVITY_DURATION:
      return action.duration;
    default:
      return state;
  }
};

