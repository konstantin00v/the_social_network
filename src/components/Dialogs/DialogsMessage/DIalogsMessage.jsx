import React from 'react';
import style from './dialogsMessage.module.css';

const DilaogMessage = (props) => {

	return <div className = {style.message}>
			{props.message}
	</div>
	
} 

export default DilaogMessage;