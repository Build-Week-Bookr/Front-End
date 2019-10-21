import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

import ReviewCard from "./ReviewCard";

const StyledReviewList = styled.div`
    min-height: 20%;
    background: green;
`;

export function ReviewList(props) {
    const { reviews } = props;
    return (
        <StyledReviewList>
            {reviews.map(reviewObj => (
                <ReviewCard reviewObj={reviewObj} />
            ))}
        </StyledReviewList>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ReviewList)