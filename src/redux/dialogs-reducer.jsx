const ADD_MESSAGE = 'ADD_MESSAGE'; 

let initialState = {
	users:[
			{id: 1, name: 'Dima'},
			{id: 2, name: 'Dasha'},  
			{id: 4, name: 'Dina'},
			{id: 8, name: 'Daneg'}, 
			{id: 15, name: 'Demid'}, 
			{id: 12, name: 'Dustin'}],

	messages:[
			{message : 'will', id : 6},
			{message : 'u', id : 7},
			{message : 'make me', id : 8},
			{message : 'a sandwich', id : 9}]
}


let dialogsReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case ADD_MESSAGE:{
			let	stateCopy = {...state,
			 messages : [...state.messages, {message: action.message}],
			newMessageBody : ''}
			return	stateCopy;
		}
		default:
			return	state;	
	}
}

export let addMessageCreator = (message) => {
	return ({type : 'ADD_MESSAGE', message})
}




export default dialogsReducer;

