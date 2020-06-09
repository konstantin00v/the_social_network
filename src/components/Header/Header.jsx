import React from 'react';
import {NavLink} from 'react-router-dom';
import Background from './../../assets/images/pexels.jpeg';

const Header = (props) => {
	return (
	<header className='header wrapper' style = { { backgroundImage: `url(${Background})`} }>	
	<img src = {require('./../lou.png')} alt = "1240" width = "10%"/>
	<div style = { { float : 'right' , backgroundColor : 'Black', margin : '20px', padding : '12px'} }>
		{props.isAuth 
			? <div>{props.login} <button onClick = {props.logout}>Log Out</button></div>
			:<NavLink to = {'/login'}> Login </NavLink>}
	</div>


	<h1><p>Simple NETW0RKKKK</p></h1> 
    </header>
	);
}

export default Header; 
