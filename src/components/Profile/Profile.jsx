import React, {useState} from 'react';
import ProfileStatus from './ProfileStatusWithHooks';
import propho from './../../assets/images/2.jpg';
import {createField, Input, Textarea} from './../../common/FormsControls/FormControls';
import {reduxForm} from 'redux-form';

const Profile = (props) => {

	let [editMode, setEditMode] = useState(false);
	
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	};

	const onSubmit = (formData) => {
		props.saveProfile(formData);
		setEditMode(false);
	}

			return 	<div className = 'row featurette'>
							<div>
								<h2>{props.profile.fullName}</h2>

								<div className='col-md-7'>
									<img src = {props.profile.photos.large || propho} alt = {'Protos'} />
									{!props.isOwner && <input  type = {'file'} onChange = {onMainPhotoSelected}/>}
									<ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
								</div>	

							</div>						   
									

						<div className='col-md-5'>
						{!editMode 
							? <ProfileData {...props}  goToEditMode = {() => {setEditMode(true)}}/> 
							: <ProfileDataForm initialValues = {props.profile} profile = {props.profile} onSubmit = {onSubmit}/>}
						</div>
					</div>
			}


const ProfileData = (props) => {

	return <div>
	{!props.isOwner && <button onClick = {props.goToEditMode}  className = "badge badge-info">Edit Mode</button>}
	<div>
		<b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'No'}
	</div>
	<div>
		<b>About me</b>: {props.profile.aboutMe}
	</div>
	<div>
		<b>My pro skills</b>: {props.profile.lookingForAJobDescription}
	</div>
	<div>
		<b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
			return <Contact contactTitle = {key} key = {key} contactValue = {props.profile.contacts[key]}/>
		})}
	</div>

		
	</div>

}

const ProfileDataFormRedux = ({handleSubmit, profile}) => {

	return 	<form onSubmit = {handleSubmit}>	<b>Set Options</b>

				<div><button className="btn btn-info">Save</button></div>

				<div>
					<b>Full name</b> {createField('Full name', 'fullName', [], Input)}
				</div>	

				<div>
					<b>Lookin' for a job</b> {createField('', 'lookingForAJob', [], Input, {type : 'checkbox'} )}
				</div>

				<div>
					<b>My pro skills</b> {createField('skills', 'lookingForAJobDescription', [], Textarea )}
				</div>

				<div>
					<b>About me</b> {createField('my info', 'aboutMe', [], Textarea )}
				</div>

				<div>
					<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <div key = {key}>{key} :  {createField(key, 'contacts.' + key, [], Input)} </div>})}
				</div>


			</form>
}

const Contact = ({contactTitle, contactValue}) => {
	return 	<div><b>{contactTitle}</b>: {contactValue} 	</div>
	
}

const ProfileDataForm = reduxForm({form : 'profileData'})(ProfileDataFormRedux);

export default Profile;