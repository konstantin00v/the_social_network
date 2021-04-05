import React from 'react';
import style from './nav.module.css';
import {NavLink} from 'react-router-dom';



const Nav = () => {
	return (<div>

    

		<nav className ="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >

			<div className="container-fluid">
  				<a className="navbar-brand" href="#">Sandwich</a>
  		
  					<button className="navbar-toggler"
  							type="button" 
  							data-toggle="collapse" 
  							data-target="#navbarTogglerDemo02" 
  							aria-controls="navbarTogglerDemo02" 
  							aria-expanded="false" 
  							aria-label="Toggle navigation">
  					
  					  <span className="navbar-toggler-icon"></span>
  					
  					</button>

  					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  					  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
  					    <li className="nav-item ">
  					      <NavLink className="nav-link" to = '/profile'>Home</NavLink>
  					    </li>
  					    <li className="nav-item">
  					      <NavLink className="nav-link" to = '/dialogs'>Info</NavLink>
  					    </li>
  					    <li className="nav-item">
  					      <NavLink className="nav-link" to = '/friends'>Friends</NavLink>
  					    </li>
  					    <li className="nav-item">
  					      <NavLink className="nav-link" to = '#'>News</NavLink>
  					    </li>
  					    <li className="nav-item">
  					      <NavLink className="nav-link" to = '#'>Settings</NavLink>
  					    </li>
  					  </ul>

  				      	<form className="form-inline my-2 my-lg-0">
      						<input  className="form-control mr-sm-2" 
      								type="search" 
      								placeholder="Search"/>
      						<button className="btn btn-outline-success my-2 my-sm-0" 
      								type="submit">Search</button>
    					</form>

  					  </div>
  			</div>
		</nav>

</div>

	);
}

export default Nav;