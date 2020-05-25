import React, {useState, useEffect} from 'react';

const ProfileStatus = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
			
	useEffect(() => {setStatus(props.status)}, [props.status])

	const activateMode = () => {
		setEditMode(true)
	}
	
	const deactivateMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}
	
	const onStatusChange = (event) => {
			setStatus(event.currentTarget.value)
		}
	
		return <div>	
				<div>
					{!editMode &&
					<div > <span  onClick = {activateMode}>{props.status || 'Set Status'}</span>
					</div>
					}
					{editMode &&
					<div>
						<input  autoFocus = {true}
								onChange = {onStatusChange}
								onBlur = {deactivateMode} 
								value = {status}/>
					</div>
					}
				</div>		
			</div>
			
			}


export default ProfileStatus;