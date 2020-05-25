import React from 'react';

class ProfileStatus extends React.Component {
	
	state = {
		editMode : false,
		status : this.props.status
	}

	activateMode = () => {
		this.setState ({
			editMode : true
		})
	}

	deactivateMode = () => {
		this.setState ({
			editMode : false
		});
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (event) => {
		this.setState({
			status : event.currentTarget.value
		})
	}

	componentDidUpdate (prevProps,prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				state : this.props.status
			})
		}
	}

	render () { 
	return <div>	
		<div>
			{!this.state.editMode &&
			<div>
				<span onDoubleClick = {this.activateMode}>{this.props.status || 'Set Status'}</span>
			</div>
			}
			{this.state.editMode &&
			<div>
				<input  autoFocus = {true}
						onChange = {this.onStatusChange}
						onBlur = {this.deactivateMode} 
						value = {this.state.status}/>
			</div>
			}
		</div>		
	</div>
	
	}
}

export default ProfileStatus;