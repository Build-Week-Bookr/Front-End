import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../state/actionCreators';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import {ContainerStyled, SignUpStyled} from './LoginSignUpStyles';

// const ContainerStyled = styled.div`
// 	 /* background-color: rgb(223, 223, 223); */
// 	 background-image: url(${image});
// 	 top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 0;
//     overflow: hidden;
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center center;
// 	 /* height: 100vh; */
// 	`

// const SignUpStyled = styled.div` 
// 	width: 700px;
// 	max-width: 100%;
// 	margin: 0 auto;
// 	margin-top: 15%;
// 	margin-bottom: 15%;
// 	padding-top: 30px;
// 	padding-bottom: 30px;
// 	background-color: white;

// 	h4, p {
// 		margin-top: 20px;
// 		text-align: center
// 	}

// 	h4{
// 		color: #23374d;
// 	}

// 	.name-field {
// 		margin-top: 20px;
// 		margin-bottom: 10px;
// 		width: 50%;
// 		height: 40px;
// 		border-radius: 3px;
// 		border-width: 0.5px;
// 		text-align: center;
// 	}

// 	button {
// 		padding: 10px;
// 		width: 20%;
// 		border-radius: 5px;
// 		background-color: #23374d;
// 		color: white;
// 		margin-top: 20px;
// 		border-width: 0.5px;
// 	}
// `



const validationSchema = yup.object().shape({
	username: yup.string()
	.required('A username is required')
	.min(3, 'Name must be 3 characters or longer'),

	password: yup.string()
	.min(6, 'Password must be at least 6 characters')
	.required('A password is required'),
})

export function SignUp(props) {
	const {signUp} = props;

	const onSignUpSubmit = signUpValues => {
			signUp(signUpValues)
			props.history.push('/')
		}
	return (
		<ContainerStyled>
		<Formik 
		validationSchema={validationSchema}
		onSubmit={onSignUpSubmit}
		render={props => {
			return (
				<SignUpStyled>
					<h4>SignUp For Bookr</h4>
					<p>Sign up to see what the best books are, get book recommendations, and
						 join a great community of readers.</p>
				<Form>
				<div>
				<Field className='name-field' type="username" name="username" placeholder='Username'/>
          		<ErrorMessage name="username" component="div" />
				</div>
				<div>
          	<Field className='name-field' type="password" name="password" placeholder='Password' />
          <ErrorMessage name="password" component="div" />
				</div>
          <button type="submit">Sign Up</button>
				</Form>
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
)(SignUp)