import {getAuthUserData} from './auth-reducer';
const INITIALAZED_SUCCESS = 'INITIALAZED_SUCCESS';

let initialState = { 
	initialized : false
}

type InitialStateType = typeof initialState

const appReducer = ( state = initialState, action:any): InitialStateType => {
	switch (action.type) {
			
	 	case INITIALAZED_SUCCESS:
	 			return {
	 				...state,
	 				initialized: true	 				
	 			};
	 	
	 	default:
	 		return state;

	}
}

type setInitialaizedSuccessTypeCreactor = {
	type: typeof INITIALAZED_SUCCESS
}

export let setInitialaizedSuccess = ():setInitialaizedSuccessTypeCreactor => ({type : 'INITIALAZED_SUCCESS' })

export let initializeApp = () => (dispatch:any) => {
	let promise = dispatch(getAuthUserData());
	Promise.all([promise]).then(() => {dispatch(setInitialaizedSuccess());})
}



export default appReducer;

