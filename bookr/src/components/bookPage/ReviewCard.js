import React from "react";
import styled from "styled-components";

const StyledReviewCard = styled.div`
    margin-bottom: 0.5rem;
`;

export default function ReviewCard(props) {
    const { reviewObj } = props;

    return (
        <StyledReviewCard>
            <p>{reviewObj.review}</p>
            <h6>{reviewObj.reviewer}</h6>
        </StyledReviewCard>
    )
}