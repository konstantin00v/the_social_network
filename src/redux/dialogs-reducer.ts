const ADD_MESSAGE = 'ADD_MESSAGE'; 

type UsersType = {
	id:  number,
	name: string
}

type MessageType = {
	message: string,
	id: number
}

let initialState = {
	users:[
			{id: 1, name: 'Dima'},
			{id: 2, name: 'Dasha'},  
			{id: 4, name: 'Dina'},
			{id: 8, name: 'Danik'},
			{id: 15, name: 'Demid'}, 
			] as Array<UsersType>,

	messages:[
			{message : 'will', id : 6},
			{message : 'u', id : 7},
			{message : 'make me', id : 8},
			{message : 'a sandwich', id : 9}
			] as Array<MessageType>
}

export type InitialStateType = typeof initialState

let dialogsReducer = (state = initialState, action: any): InitialStateType => {
	
	switch (action.type) {
		case ADD_MESSAGE:{
			return {...state,
			 messages : [...state.messages, {message: action.message, id: 2}]
			}
		}
		default:
			return	state;	
	}
}

type addMessageCreatorType = {
	type: typeof ADD_MESSAGE,
	message: string
}

export let addMessageCreator = (message: string): addMessageCreatorType => {
	return ({type : 'ADD_MESSAGE', message})
}




export default dialogsReducer;

