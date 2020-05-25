import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {follow,
 	unfollow, setUsers,
   	setCurrentPage,	setTotalUserCount,
  	toggleIsFetching, toggleFollowingProgress,
 	getUserThunkCreator} from './../../redux/friends-reducer';
import Preloader from './../../common/Preloader';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import {getUsers} from './../../redux/users-selectors';

class UsersContainer  extends React.Component  {


	componentDidMount () {
			this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)	
	}
	

	onPageChanged = (p) => {
			this.props.getUserThunkCreator(p, this.props.pageSize)		
	}

	render () {  
		return <div>
		{this.props.isFetching ? <Preloader/> : null }
		<Users follow = {this.props.follow}
			unfollow = {this.props.unfollow}
			totalUsersCount = {this.props.totalUsersCount}
			pageSize = {this.props.pageSize}
			onPageChanged = {this.onPageChanged}
			currentPage = {this.props.currentPage}
			users = {this.props.users}
			followingInProgress = {this.props.followingInProgress}
		/>
		</div>

	}

}


let mapStateToProps = (state) => {
		return {
			users : getUsers(state),
			pageSize : state.Friends.pageSize,
			totalUsersCount : state.Friends.totalUsersCount,
			currentPage : state.Friends.currentPage,
			isFetching : state.Friends.isFetching,
			followingInProgress : state.Friends.followingInProgress
		}
}

let withRedirrect = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps, {follow, unfollow,
										setUsers, setCurrentPage,
										setTotalUserCount, toggleIsFetching,
										toggleFollowingProgress, getUserThunkCreator})(withRedirrect);