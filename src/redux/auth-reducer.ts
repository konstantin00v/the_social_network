import {authAPI} from './../api/api.js';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = { 
	id : 8012 as number | null,
	email : null as string | null,
	login : null as string | null,
	isAuth : false
}

export type InitialStateType = typeof initialState;

const authReducer = ( state = initialState, action: any):InitialStateType => {
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

export let setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
	return ({type : 'SET_USER_DATA', payload : {id, email, login, isAuth} })
}

export let getAuthUserData = () => (dispatch: any) => {
		return authAPI.me().then((response: any )=> {
					if (response.data.resultCode === 0) {
							let {id, login, email} = response.data.data;
							dispatch(setAuthUserData(id, email, login, true))
					}
		})
}

export let login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
		authAPI.login(email, password, rememberMe).then((response: any ) => {
					if (response.data.resultCode === 0) {
							dispatch(getAuthUserData())
					} 		})
}

export let logout = () => (dispatch: any) => {
		authAPI.logout().then((response: any ) => {
					if (response.data.resultCode === 0) {
							dispatch(setAuthUserData(null, null, null, false))
					}
		})
}


export default authReducer;

