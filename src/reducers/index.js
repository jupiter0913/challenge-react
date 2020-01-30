import { combineReducers } from 'redux';
import {machinesReducer} from './machines-reducer';

// Root Reducer
const rootReducer = combineReducers({
  machines: machinesReducer,
});

export default rootReducer;
