import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import byThemeId, * as fromByThemeId  from "./byThemeId";
import createThemeIds, * as fromThemeIds from './createThemeIds';
import byActivityId, * as fromByActivityId from "./byActivityId";
import createActivityIds, * as fromActivityIds from './createActivityIds';
import {byCategoryId, categoryIds} from "./category";
import {byNavigationId, navigationIds} from "./navigation";
import {byQuoteId, quoteIds} from "./quote";
import {byUserId, userIds} from "./user";
import {duration} from "./duration";
//
// const IsCompleted = (state = { completed: false, id:"" }, action) => {
//   switch(action.type) {
//     case 'ACTIVITY_COMPLETED':
//       return {
//         // ...state,
//         completed: true,
//         id: action.id
//       };
//
//     case 'ACTIVITY_RESET':
//       return {
//         // ...state,
//         completed: false,
//         id: action.id
//       };
//
//     default:
//       return state
//   }
// };
const activityIdsByFilter = combineReducers({
  all: createActivityIds('all'),
  question: createActivityIds('question'),
  flow: createActivityIds('flow'),
  routine: createActivityIds('routine'),
  being: createActivityIds('being'),
  provoke: createActivityIds('provoke'),
  hack: createActivityIds('hack'),
  hustle: createActivityIds('hustle'),
  pivot: createActivityIds('pivot'),
  pause: createActivityIds('pause'),
  play: createActivityIds('play'),
});

const themeIdsByFilter = combineReducers({
  all: createThemeIds('all'),
  pause: createThemeIds('pause'),
  play: createThemeIds('play'),
});


const reducers = {
  byNavigationId,
  navigationIds,
  byCategoryId,
  categoryIds,
  byActivityId,
  activityIdsByFilter,
  byThemeId,
  themeIdsByFilter,
  byQuoteId,
  quoteIds,
  byUserId,
  userIds,
  duration,
  form: formReducer
};

export const getVisibleActivities = (state, filter) => {
  const ids = fromActivityIds.getIds(state.activityIdsByFilter[filter || 'all']);
  return ids.map(id => fromByActivityId.getActivity(state.byActivityId, id));
};

export const getVisibleThemes = (state, filter) => {
  const ids = fromThemeIds.getIds(state.themeIdsByFilter[filter || 'all']);
  return ids.map(id => fromByThemeId.getTheme(state.byThemeId, id));
};

export default combineReducers(reducers);
