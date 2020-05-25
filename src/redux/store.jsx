import profileReducer from './profile-reducer';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';


let store = {

	getstate () {
		return this._state;
	},

	_state:{

		ProfilePage:{ posts:[
			{message:'New Post'},
			{message:'My Post', likes:'12'},
			{message:'Add Post', likes:'13'},
			{message:'Send Message', likes:'1'}
			], newPostText: ''
		},
		MessagesPage:{users:[
			{id: 1, name: 'Dima'},
			{id: 2, name: 'Maxim'},  
			{id: 1, name: 'Nick'},
			{id: 8, name: 'Yana'}, 
			{id: 15, name: 'Olof'}, 
			{id: 12, name: 'Nastya'}]
		}
	},

	subscribe (observer) {
	this.renderEntireTree = observer;
	},

	renderEntireTree () {
	console.log('State was changed');
	},


 	dispatch (action) {
		this._state.ProfilePage = profileReducer (this._state.ProfilePage, action)
		this.renderEntireTree(this._state);
	}
}








window.store = store;
export default store;

