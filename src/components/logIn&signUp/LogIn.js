import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../state/actionCreators';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContainerStyled, SignUpStyled } from './LoginSignUpStyles';

const SignUpHereStyled = styled.p`
	.signUp {
		color: #1089ff;
	}
`

const validationSchema = yup.object().shape({
	username: yup.string()
		.required('A username is required')
		.min(3, 'Name must be 3 characters or longer'),

	password: yup.string()
		.min(6, 'Password must be at least 6 characters')
		.required('A password is required'),
})

export function LogIn(props) {
	const { logIn } = props;

	const onLogInSubmit = logInValues => {
		logIn(logInValues)
		props.history.push('/books')

	}

	return (
		<ContainerStyled>
			<Formik
				validationSchema={validationSchema}
				onSubmit={onLogInSubmit}
				render={props => {
					return (
						<SignUpStyled>
							<Form>
								<div>
									<Field className='name-field' type="username" name="username" placeholder='Username' />
									<ErrorMessage name="username" component="div" />
								</div>
								<div>
									<Field className='name-field' type="password" name="password" placeholder='Password' />
									<ErrorMessage name="password" component="div" />
								</div>
								<button type="submit">Login</button>
							</Form>
							<SignUpHereStyled>Don't have an account with us yet?
				 <Link className='signUp' to='/signup'>Sign Up here</Link>
							</SignUpHereStyled>
						</SignUpStyled>
					)
				}}
			/>
		</ContainerStyled>
	)
}

export default connect(
	state => state,
	actionCreators,
)(LogIn)