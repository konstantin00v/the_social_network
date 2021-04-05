import React from 'react';
import styles from './users.module.css'
import userphoto from './../../assets/images/2.jpg';
import {NavLink} from 'react-router-dom';
import Paginator from './../../common/Paginator';


let Users = (props) => {

	return <div className = "album py-5 bg-light">

				<div style={{margin: "70px"}}>
					<Paginator {...props}/>
				</div>	

				
					{	props.users.map( user => 
							<div  className = {styles.user} key = {user.id} >
										
								<NavLink to = {'/profile/' + user.id}>
									<div>
											<div>
												<img alt = {'Zerg'} src = {user.photos.small != null 
															? user.photos.small 
															: userphoto} className = {styles.kart}/>
											</div>
											<div className={styles.username}>{user.name}</div> 
									</div>		
								</NavLink>

								<div>
									{user.followed ? <button disabled = {props.followingInProgress.some(id => id === user.id)} 
															onClick = {() => {props.unfollow(user.id)}}
															className = {styles.unfo}>
														UnFollow
													</button> 
													
												  : <button 	disabled = {props.followingInProgress.some(id => id === user.id)} 
																onClick = {() => {props.follow(user.id)}}
																className = {styles.fo}>
														Follow
													</button>
									}
								</div>
							</div>
						)
					}

					
			</div>
	

}

export default Users;


























