import userAPI from './../api/api.js';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users:[],
	pageSize:16,
	totalUsersCount:0,
	currentPage:1,
	isFetching: false,
	followingInProgress: []
}  

const friendsReducer = (state = initialState , action) => {
	
	switch (action.type) {
	
		case FOLLOW:
		 return {
		 	...state, 
			 users : state.users.map( u => { 
			 	if (u.id === action.userID) {
							return {...u, followed : true}
						}
					return u;	
					}) 
		 }
	 		
	 	case UNFOLLOW: 
	 	 return {
	 	 	...state, 
				users : state.users.map( u => {
						if (u.id === action.userID) {
							return {...u, followed : false}
						} 
					return u;	
					}) 
		 }
		
		case SET_USERS:
		 return {...state, users : [ ...action.users]}
				
		case SET_CURRENT_PAGE:
		 return {...state, currentPage : action.currentPage}

		 case SET_TOTAL_USER_COUNT:
		 return {...state, totalUsersCount : action.count}

		 case IS_FETCHING:
		 return {...state, isFetching : action.isf}

		 case TOGGLE_IS_FOLLOWING_PROGRESS:
		 return {...state, followingInProgress : action.isFetching 
		 	? [...state.followingInProgress, action.userId]
		 	: state.followingInProgress.filter(id => id !== action.userId)}


		default:
	 		return state;
	 		
	}
}

export let followSuccess = (userID) => {
	return ({type : FOLLOW, userID})
}


export let unfollowSuccess = (userID) => {
	return ({type : UNFOLLOW, userID })
}

export let setUsers = (users) => { 
	return ({type : SET_USERS , users})
}

export let setCurrentPage = (currentPage) => {
	return ({type : SET_CURRENT_PAGE, currentPage})
}

export let setTotalUserCount = (count) => {
	return ({type : SET_TOTAL_USER_COUNT, count})
}

export let toggleIsFetching = (isf) => {
	return ({type : IS_FETCHING, isf})
}

export let toggleFollowingProgress = (isFetching, userId) => {
	return ({type : TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
}

export const getUserThunkCreator = (currentPage, pageSize) => { 	
	return (dispatch) => {
			dispatch(toggleIsFetching(true));
			dispatch(setCurrentPage(currentPage))
		userAPI.getUsers(currentPage, pageSize)
						.then(data => { 
							dispatch(toggleIsFetching(false));
							dispatch(setUsers(data.items));
							dispatch(setTotalUserCount(data.totalCount))})

	}
}

export const follow = (id) => (dispatch) => {
		dispatch(toggleFollowingProgress(true, id));
		userAPI.follow(id)
		.then( response => { if (response.data.resultCode === 0) {
			dispatch(followSuccess(id))}
			dispatch(toggleFollowingProgress(false, id))
							}
		)
	}



export const unfollow = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, id));
		userAPI.unfollow(id)
		.then( response => { if (response.data.resultCode === 0) {
			dispatch(unfollowSuccess(id))}
			dispatch(toggleFollowingProgress(false, id))
							}
		)
	}
}

export default friendsReducer;


window.fie = initialState.users;
