import {profileAPI} from './../api/api.js';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = { posts:[
			{message:'New Post', id : '1'},
			{message:'My Post', likes:'12', id : '2'},
			{message:'Add Post', likes:'13', id : '3'},
			{message:'Send Message', likes:'1', id : '4'}
			], newPostText: '',
			profile : null,
			status : ''
}




const profileReducer = ( state = initialState, action) => {
	switch (action.type) {
		
		case ADD_POST:{ return {...state, posts : [{message: state.newPostText, likes: '18'},...state.posts], newPostText : '' }

	 	}	
	 	case UPDATE_NEW_POST:{
	 		let stateCopy = {...state};
	 		stateCopy.newPostText = action.NewPostElement;
	 			return stateCopy;
	 	}
	 	case SET_USER_PROFILE:{
	 			return {...state, profile: action.profile};
	 	}

	 	case SET_STATUS:{
	 			return {...state, status: action.status};
	 	}

	 	case SAVE_PHOTO_SUCCESS:{debugger
	 			return {...state, profile : {...state.profile, photos : action.file}};
	 	}

	 	default:
	 		return state;

	}
}

export let addPostwall = () => {
	return ({type : 'ADD_POST'})
}

export let onChange = (text) => {
	return ({type : 'UPDATE_NEW_POST', NewPostElement : text })
}

export let setUserProfile = (profile) => {
	return ({type : 'SET_USER_PROFILE', profile })
}

export let setStatus = (status) => {
	return ({type : 'SET_STATUS', status })
}

export let savePhotoSuccess = (file) => {
	return ({type : 'SAVE_PHOTO_SUCCESS', file })
}

export let getUserProfile = (id) =>	(dispatch) => {
		profileAPI.getProfile(id)
		.then(response => {dispatch(setUserProfile(response.data)) })

	}

export let getStatus = (id) =>	(dispatch) => {
		profileAPI.getStatus(id)
		.then(response => {dispatch(setStatus(response.data)) })

	}

export const updateStatus = (status) => (dispatch) => {
		profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0)
			{dispatch(setStatus(status));} })

	}

export const savePhoto = (file) => async (dispatch) => {
		let response = await profileAPI.savePhoto(file);
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccess(response.data.data.photos))
		} 

	}

export const saveProfile = (profile) => async (dispatch, getState) => {
		const userId = getState().Auth.id;
		let response = await profileAPI.saveProfile(profile);
		if (response.data.resultCode === 0) {
			dispatch(getUserProfile(userId))
		} else {	let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common error'
					dispatch(stopSubmit('profileData', {_error: message}))
				}

	}

export default profileReducer;

