import {authAPI} from './../api/api.js';
import {stopSubmit} from 'redux-form';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = { 
	id : null,
	email : null,
	login : null,
	isAuth : false
}

const authReducer = ( state = initialState, action) => {
	switch (action.type) {
		
		
	 	case SET_USER_DATA:
	 			return {
	 				...state,
	 				...action.payload	 				
	 			};
	 	
	 	default:
	 		return state;

	}
}

export let setAuthUserData = (id, email, login, isAuth) => {
	return ({type : 'SET_USER_DATA', payload : {id, email, login, isAuth} })
}

export let getAuthUserData = () => (dispatch) => {
		return authAPI.me().then(response => { 
					if (response.data.resultCode === 0) {
							let {id, login, email} = response.data.data;
							dispatch(setAuthUserData(id, email, login, true))
					}
		})
}

export let login = (email, password, rememberMe) => (dispatch) => {
		authAPI.login(email, password, rememberMe).then(response => { 
					if (response.data.resultCode === 0) {
							dispatch(getAuthUserData())
					} else {
						let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common error'
						dispatch(stopSubmit('login', {_error: message}))
					}
		})
}

export let logout = () => (dispatch) => {
		authAPI.logout().then(response => { 
					if (response.data.resultCode === 0) {
							dispatch(setAuthUserData(null, null, null, false))
					}
		})
}


export default authReducer;

