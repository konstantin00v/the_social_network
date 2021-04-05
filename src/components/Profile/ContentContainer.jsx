import {addPostwall, onChange, getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from './../../redux/profile-reducer';
import Content from './Content';
import {connect} from	"react-redux";
import React from 'react';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {compose} from 'redux';



class ProfileContainer extends React.Component {

	refreshProfile () {
		let userId = this.props.match.params.userId;
		if (!userId) { userId = this.props.id;};
		if (!userId) {this.props.history.push('/login');}
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)

	}

	componentDidMount () {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.match.params.userId !== this.props.match.params.userId) {
			this.refreshProfile()
		}
	}

	render () {
		return (
			<Content {...this.props} isOwner = {!!this.props.match.params.userId}/>
		)
	}



}

let mapStateToProps = (state) => {
	return {
		newPostText : state.ProfilePage.newPostText,
		stateWall : state.ProfilePage.posts,
		profile : state.ProfilePage.profile,
		status : state.ProfilePage.status,
		id : state.Auth.id
	}
}



export default compose(withAuthRedirect, withRouter, connect(mapStateToProps,{addPostwall, onChange, getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}))(ProfileContainer)

