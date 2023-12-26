import { combineReducers } from 'redux';
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';

const spaceXReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

export default spaceXReducer;