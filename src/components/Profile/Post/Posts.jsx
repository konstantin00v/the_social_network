import React from 'react';
import style from './Post.module.css';
import Post from './Post/Post'

const Posts = React.memo((props) => {
	

let wall = props.stateWall.map( wallpost => <Post message = {wallpost.message}  key = {wallpost.id}
		 	 /> )


	let NewPostElement = React.createRef(); 

	let onPostChange = () => {
		let text = NewPostElement.current.value;
		props.onChange(text)
	}

	let onAddPostWall = () => {
		props.addPostwall();
	}

	return <div>


		<div className = {`${style.content}  wrapper`}>


		
			<div >
				<textarea ref = {NewPostElement}
				 onChange = {onPostChange}
				 value = {props.newPostText} />		
				<button onClick = {onAddPostWall}>ADD Post</button>	
			</div>

			<div >
				{wall}	
			</div>


		</div>	</div>
})

export default Posts;