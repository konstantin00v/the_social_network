import React from 'react';
import styles from './users.module.css'
import user from './../../assets/images/2.jpg';
import {NavLink} from 'react-router-dom';
import Paginator from './../../common/Paginator';


let Users = (props) => {

	return <div>
		<div className = {styles.pag}>
			<Paginator {...props}/>
		</div>		{
		props.users.map( aua => <div  className = {styles.user} key = {aua.id} >
			
			<NavLink to = {'/profile/' + aua.id}>
				<div>
						<div>
							<img alt = {'Zerg'} src = {aua.photos.small != null 
										? aua.photos.small 
										: user} className = {styles.kart}/>
						</div>
						{aua.name} 
				</div>		
			</NavLink>

				<div>
					{aua.followed ? <button disabled = {props.followingInProgress.some(id => id === aua.id)} 
											onClick = {() => {props.unfollow(aua.id)}}
											className = {styles.unfo}
									>UnFollow</button> 
									
								: <button 	disabled = {props.followingInProgress.some(id => id === aua.id)} 
												onClick = {() => {props.follow(aua.id)}}
												className = {styles.fo}
									>Follow</button>
					}
				</div>
		</div>)
				}
	</div>
	

}

export default Users;


























