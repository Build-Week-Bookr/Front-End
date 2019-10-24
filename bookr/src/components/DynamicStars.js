import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";
import starImg from "../images/star.png";

const StyledDynamicStars = styled.div`
    width: 100%;

    img {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
`;

export function DynamicStars(props) {
    const { bookId, reviews, fetchReviews } = props;

    useEffect(() => {
        fetchReviews(bookId); 
    }, []);

    const generateStarArray = () => {
        if (reviews && reviews[0].book_id === bookId) {
            const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
            const roundedAverageRating = Math.round(averageRating);
            let starArray = [1, 2, 3, 4, 5];
            console.log(bookId, reviews, averageRating, roundedAverageRating, starArray.slice(0, roundedAverageRating));
            return starArray.slice(0, roundedAverageRating);
        }
    }
    const starArray = generateStarArray();

    return (
        <StyledDynamicStars className="stars">
            {(!starArray && <h6>No rating yet!</h6>) || starArray.map(i => (
                <img src={starImg} alt="star" key={i} />
            ))}
        </StyledDynamicStars>
    )
}

export default connect(
    state => ({ reviews: state.reviews, fetchReviews: state.fetchReviews }),
    actionCreators
)(DynamicStars);