import { combineReducers } from 'redux';
import session from './session/reducer';

const reducers = combineReducers({ session })

export default reducers