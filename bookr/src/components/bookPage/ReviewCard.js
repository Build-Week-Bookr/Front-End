import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";

const StyledReviewCard = styled.div`
    background: red;
`;

export function ReviewCard(props) {
    const { reviewObj, user, fetchUser } = props;
    const userId = reviewObj.user_id;

    useEffect(() => {
        if (!user) {
            fetchUser(userId);
        }
    }, []);

    return (
        <StyledReviewCard>
            {(!user && <h6>...</h6>) ||
                <>
                    <p>{reviewObj.contents}</p>
                    <p>{user.username}</p>
                </>
            }
        </StyledReviewCard>
    )
}

export default connect(
    state => state,
    actionCreators,
)(ReviewCard);