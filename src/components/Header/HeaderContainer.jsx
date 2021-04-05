import React from 'react';
import Header from './Header'
import {logout, getAuthUserData} from './../../redux/auth-reducer';
import {connect} from	"react-redux";

class HeaderContainer extends React.Component {

	render () {
		return <Header {...this.props} />
	}
}


const mapStateToProps = (state) => ({ isAuth : state.Auth.isAuth, 
									  login : state.Auth.login
 });

export default connect (mapStateToProps, {logout, getAuthUserData}) (HeaderContainer); 
