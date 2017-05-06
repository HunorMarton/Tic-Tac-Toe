// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import board from './boardReducer';
 import game from './gameReducer';

 const rootReducer = combineReducers({
   board,
   game
 });

 export default rootReducer;
