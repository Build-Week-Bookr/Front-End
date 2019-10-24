import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";
import uuid from "uuid";
import AddReview from './AddReview';

import ReviewCard from "./ReviewCard";

const StyledReviewList = styled.div`
    min-height: 20%;
    background: #F0F0F0;
    border-radius: 10px;
    padding: 1.5rem 1rem 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        margin-bottom: 2rem;
        text-decoration: underline;
    }
    h5 {
        margin-bottom: 1rem;
    }
`;

export function ReviewList(props) {
    const { reviews, bookId, fetchReviews } = props;

    useEffect(() => {
        fetchReviews(bookId);
    }, []);

    return (
        <>
            {/* If _reviews_ is null, render 'Loading reviews...'  */}
            {/* Otherwise, if _reviews_ is [], render 'There are no reviews,' etc., otherwise render the review list. */}
            <StyledReviewList>
                <h4>Reviews</h4>
								<AddReview />
                {(!reviews && <h5>Loading reviews...</h5>) ||
                    (reviews.length === 0 && <h5>There are no reviews yet for this book. Be the first!</h5>) ||
                        reviews.map(reviewObj => (
                            <ReviewCard reviewObj={reviewObj} key={reviewObj.id} />
                        ))}
            </StyledReviewList>
        </>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ReviewList)