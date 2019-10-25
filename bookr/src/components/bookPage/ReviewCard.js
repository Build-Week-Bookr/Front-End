import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import StarRatingComponent from 'react-star-rating-component';

const StyledReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    p {
        margin-bottom: 0.5rem;
    }
`;

export function ReviewCard(props) {
	const { reviewObj, user, fetchUser } = props;
	const userId = reviewObj.added_by;

	useEffect(() => {
		if (!user) {
			fetchUser(userId);
		}
	}, []);

	return (
		<StyledReviewCard>
			{(!user && <h6>...</h6>) ||
				<>
					<p>"{reviewObj.contents}"</p>
					<h6>— {user.username}</h6>
					<StarRatingComponent
						name="rating"
						starCount={5}
						editing={false}
						value={reviewObj.rating}
					/>
				</>
			}
		</StyledReviewCard>
	)
}

export default connect(
	state => state,
	actionCreators,
)(ReviewCard);