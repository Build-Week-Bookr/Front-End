import React, {useState} from "react";
import * as actionCreators from '../../state/actionCreators';
import { Form, Field, Formik} from 'formik';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import StarRatingComponent from "react-star-rating-component";

const AddReviewContainerStyled = styled.div`
	background-color: rgb(223, 223, 223);
	height: 100vh;
	`;

const AddReviewButtonStyled = styled.button`
	padding: 10px;
	width: 20%;
	border-radius: 5px;
	background-color: #23374d;
	color: white;
	margin-top: 20px;
	border-width: 0.5px;
`;

const ReviewFormTitleStyled = styled.h4`
	padding-top: 50px;
`


const ReviewFormStyled = styled.div`
	.text-area {
	  width:400px;
		height:200px;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 30px;
		border-radius: 5px;
		border-width: 1px;

	}
	.star-rating {
	font-size: 30px;
	margin-left: 20px;
	}
`;

export function AddReview(props) {

	const {book, addReview, fetchReviews} = props;

	const [rating, setRating] = useState(0);

	const onStarClick = (nextValue, prevValue, name) => {
		setRating(nextValue)
	}



	const authedUserId = localStorage.getItem("authedUserId");
	const onSubmit = (formValues) => {
		addReview(formValues, authedUserId, book.id);
		fetchReviews(book.id);
		props.history.push(`/book/${book.id}`)
	}



	return (
		<AddReviewContainerStyled>
		<Formik
		initialValues={{
			contents: '',
			rating: 3,
			
		}}
		onSubmit={onSubmit}
		render={props => (
			<Form>
				<ReviewFormTitleStyled>Add A Review!</ReviewFormTitleStyled>
				<ReviewFormStyled>
					<Field className='text-area' name='contents' type='text' placeholder='Add a review'/>
				</ReviewFormStyled>
				<ReviewFormStyled>
				{/* <Field name='rating' type='number' placeholder='rate from 1 to 5'/> */}
				<StarRatingComponent className='star-rating'
					onStarClick={onStarClick}
          name="rating" 
          starCount={5}
          value={rating}
        />
				</ReviewFormStyled>
				<AddReviewButtonStyled type='submit'>Add Review</AddReviewButtonStyled>
			</Form>
		)}
		/>
		</AddReviewContainerStyled>
	)
}

export default connect(
	state => state,
	actionCreators
)(AddReview)