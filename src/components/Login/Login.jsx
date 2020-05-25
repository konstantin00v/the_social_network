import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from './../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginForm = (props) => {
	return <form onSubmit = {props.handleSubmit}>
		<div>
			<Field placeholder = {'Login'} name = {'email'} component = {'input'} />
		</div>
		<div>
			<Field placeholder = {'Password'} name = {'password'} component = {'input'} type = {'password'} />
		</div>
		<div>
			<Field type = {'checkbox'} name = {'rememberMe'} component = {'input'} />remember me
		</div>
		{props.error && <span style = { { color : 'yellow' , backgroundColor : 'Black', marginLeft : '320px', padding : '12px'} }>{props.error}</span>	}	
		<div>
			<button>Login</button>
		</div>
	</form>
}

const LoginReduxForm = reduxForm({form : 'login'})(LoginForm)



const Login = (props) => {

		const onSubmit = (formData) => {
			props.login(formData.email, formData.password, formData.rememberMe);
		}

		if (props.isAuth) {
			return <Redirect to = {'/profile'}/>
		}

	return <div>
			<h1>Login or Sign in</h1>
			<form>
				<LoginReduxForm onSubmit = {onSubmit}/>
			</form>
	</div>
} 

const mapStateToProps = (state) => ({
	isAuth : state.Auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);