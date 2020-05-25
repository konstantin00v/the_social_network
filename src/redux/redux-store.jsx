import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
 ProfilePage : profileReducer,
 MessagesPage : dialogsReducer,
 Friends : friendsReducer,
 Auth : authReducer,
 form : formReducer,
 app : appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 
window.store = store;

export default store;