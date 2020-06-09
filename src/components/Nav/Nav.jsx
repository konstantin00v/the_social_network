import React from 'react';
import style from './nav.module.css';
import {NavLink} from 'react-router-dom';



const Nav = () => {
	return (
		<div className ={`${style.nav}`} >
			
			<ul>
				<li><NavLink to = '/profile'>Profile</NavLink></li>
				<li><NavLink to = '/dialogs'>Messages</NavLink></li>
				<li><NavLink to = '/friends'>Friends</NavLink></li>
				
				{/*<li><a href = '#a'>News</a></li>
				<li><a href = '#a'>Music</a></li>
				<li><a href = '#a'>Settings</a></li>*/}
			</ul>

		</div>	
	);
}

export default Nav;