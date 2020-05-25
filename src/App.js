import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ContentContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from	'./components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Route} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import {connect} from	"react-redux";
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import Preloader from './common/Preloader';

class App extends React.Component {

	componentDidMount () {
		this.props.initializeApp();	

	}


	render () {
		if (!this.props.initialized) { return <Preloader/>
		}

  		return (
				<div className="App">

			   	 	<HeaderContainer /> 
		
				  			<Nav /> 
				   	     <Route path = '/profile/:userId?' render = {() => <ProfileContainer
				   	     />} />
	
				   	     <Route path = '/dialogs' render = {() => <DialogsContainer
				   	      />}/>
	
				   	     <Route path = '/friends' render = {() => <UsersContainer
				   	      />}/>
	
				   	     <Route path = '/login' render = {() => <Login
			   	      />}/>

				</div>
	    	);
		}
}

let mapStateToProps = (state) => ({
	initialized : state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
