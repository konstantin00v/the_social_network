import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
	return <div>

	<div className = {style.postitem}>
		{props.message}     
		 </div>
	</div>
}

export default Post;