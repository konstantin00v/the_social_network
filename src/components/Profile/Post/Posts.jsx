import React from 'react';
import style from './Post.module.css';
import Post from './Post/Post'

const Posts = React.memo((props) => {
	

let wall = props.stateWall.map( wallpost => <div className={style.postitem}><li className = {style.lishki}> <Post message = {wallpost.message}  key = {wallpost.id}
		 	 /> </li></div> )


	let NewPostElement = React.createRef(); 

	let onPostChange = () => {
		let text = NewPostElement.current.value;
		props.onChange(text)
	}

	let onAddPostWall = () => {
		props.addPostwall();
	}

	return <div>


		<div className = {`${style.content}  `}>

			<div className = 'row featurette'>
				<div className = 'col-md-5'>
					
					<ul className = {style.block}>
						{wall}	
					</ul>
					
					<textarea ref = {NewPostElement}
					 		  onChange = {onPostChange}
					 		  value = {props.newPostText} />	

					<button onClick = {onAddPostWall}>ADD Post</button>	

				</div>

				
			</div>

		</div>	
	</div>
})

export default Posts;