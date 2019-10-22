import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";
import uuid from "uuid";

import ReviewCard from "./ReviewCard";

const StyledReviewList = styled.div`
    min-height: 20%;
    background: green;
`;

export function ReviewList(props) {
    const { reviews, id, fetchReviews } = props;

    useEffect(() => {
        fetchReviews(id);
    }, []);

    return (
        <>
            {reviews.length === 0 && <p>loading reviews...</p>}
            {reviews.length !== 0 && 
                <StyledReviewList>
                    {reviews.map(reviewObj => (
                        <ReviewCard reviewObj={reviewObj} key={uuid()} />
                    ))}
                </StyledReviewList>}
        </>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ReviewList)