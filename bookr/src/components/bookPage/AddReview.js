import React, {useState} from "react";
import * as actionCreators from '../../state/actionCreators';
import { formik, Form, Field, ErrorMessaage, Formik} from 'formik';
import * as yup from 'yup';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

const ReviewFormStyled = styled.div`
	.text-area {
	  width:400px;
		height:200px;
		text-align:start;
	}
	.star-rating {
	font-size: 30px;
	margin-left: 20px;
	}
`;

export function AddReview(props) {
	const {authedUserId, book, addReview, fetchReviews} = props;
	const onSubmit = formValues => {
		addReview(formValues, authedUserId, book.id);
		fetchReviews(props.history);
}

	return (
		<Formik
		initialValues={{
			contents: '',
			rating: 0,
			
		}}
		onSubmit={onSubmit}
		render={props => (
			<Form>
				<ReviewFormStyled>
					<Field className='text-area' name='contents' type='text' placeholder='Add a review'/>
				</ReviewFormStyled>
				<ReviewFormStyled>
				<Field name='rating' type='number' placeholder='rate from 1 to 5'/>
				</ReviewFormStyled>
				<button type='submit'>Submit Book</button>
			</Form>
		)}
		/>
	)
}

export default connect(
	state => state,
	actionCreators
)(AddReview)