import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogsMessage/DIalogsMessage';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from './../../utils/validators/validators';
import {Textarea} from './../../common/FormsControls/FormControls';

let maxLength69 = maxLengthCreator(69);

const Dialogs = (props) => {

		let CurrentDialog = props.states.users.map( di => <DialogItem
	  	id ={di.id}
	  	name ={di.name}
	  	key = {di.id}
	  	 /> )


		let DialogsMessage = props.states.messages.map( msg => <DialogMessage
		message = {msg.message} 
		id = {msg.id}
		key = {msg.message.toString()}
		 /> )
		
		let addMessage = (value) => {
			props.addMessage(value.newMessageBody)
		}



	return <div className = {`${style.wrapperitem} `}>
				<div>
					{CurrentDialog}
				</div>

				<div className = {style.message}>

					{DialogsMessage}

					<AddMessageFormRedux  onSubmit = {addMessage}/>

				</div>
			</div>		
	
}

const AddMessageForm = (props) => {


		return	<form onSubmit = {props.handleSubmit}>	
					<div>
						<Field  component = {Textarea} 
							name = {'newMessageBody'} 
							placeholder = {'Enter your message'}
							validate = {[required, maxLength69]}/>	
					</div>
					<div><button className = {style.knopka}> Send Nudes </button></div>
				</form>
}

const AddMessageFormRedux = reduxForm({form : 'messages'})(AddMessageForm);

export default Dialogs;
