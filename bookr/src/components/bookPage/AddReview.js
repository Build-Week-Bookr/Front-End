import React, {useState} from "react";
import * as actionCreators from '../../state/actionCreators';
import { formik, Form, Field, ErrorMessaage, Formik} from 'formik';
import * as yup from 'yup';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {addReview} from '../../state/actionCreators';
import StarRatingComponent from 'react-star-rating-component';

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
`


export function AddReview(props) {
	 const {bookId} = props;
	const dummyUserID = 1

	const initialValuesForm = {
		book_id: bookId,
		contents: '',
		rating: 0,
		addedBy: dummyUserID
	}

	const addReviewAPI = 'https://bookr-eu.herokuapp.com/api/reviews/';
	const [review, setReview] = useState(initialValuesForm);

	const dispatch = useDispatch();

	const handleChange = event => {
		setReview({
			...review,
			[event.target.name]: event.target.value,
	})
	}

	// const onSubmit = formValues => {
	// 	addReview(formValues);
	// 	fetchReviews(bookId);
	// }

	const onSubmit = event => {
		event.preventDefault();
		dispatch(addReview(addReviewAPI, review));
		setReview(initialValuesForm);
}

	return (
		// <Formik
		// initialValues={{
		// 	contents: '',
		// 	rating: 0,
		// 	book_id: bookId
		// }}
		// onSubmit={onSubmit}
		// render={props => (
			<form>
				<ReviewFormStyled>
					<input className='text-area' name='content' type='text' placeholder='Add your review' value={review.name} onChange={handleChange} />
				</ReviewFormStyled>
				<ReviewFormStyled>
					<StarRatingComponent className='star-rating' />
				</ReviewFormStyled>
				<button onClick={onSubmit}>Submit Book</button>
			</form>
	// 	)}
	// 	/>
	)
}

export default connect(
	state => state,
	actionCreators
)(AddReview)