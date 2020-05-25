import React from 'react';
import Posts from './Post/Posts';
import Profile from './Profile'
import Preloader from './../../common/Preloader';

const Content = (props) => {


	if (!props.profile) {
		return <Preloader/>
	}


	return <div> <Profile  saveProfile = {props.saveProfile}
						   profile = {props.profile}
						   savePhoto = {props.savePhoto} 
						   isOwner = {props.isOwner} 
						   status = {props.status} 
						   updateStatus = {props.updateStatus} />
		
		<Posts 
			newPostText = {props.newPostText}
			stateWall = {props.stateWall}
			addPostwall = {props.addPostwall}
			onChange = {props.onChange}
		/>
		</div>

}


export default Content; 