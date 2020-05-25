const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
	users : [ ]
};

const usersReducer = (state = initialState, action) => {
	
	switch (action.type) {
		
		case FOLLOW:
		 return {
		 	...state, 
			 users : state.users.map( u => { 
			 	if (u.id === action.id) {
							return {...u, followed : true};
						}
					return u;	
					}) 
		 };
	 		
	 	case UNFOLLOW: 
	 	 return {...state, 
			users : [...state.users], 
			users : state.users.map( u => {
						if (u.id === action.id) {
							return {...u, followed : false}
						} 
					return u;	
					}) 
		 }

		case SET_USERS: 
		 return {...state, users : [...state.users, ...action.users]}

	 		
	}
}

export const followAC = (userID) => ({type : FOLLOW, userID})


export const unfollowAC = (userID) => {
	return ({type : UNFOLLOW, userID })
}

export const setUsersAC = (users) => ({type : SET_USERS, users})

export default usersReducer;

