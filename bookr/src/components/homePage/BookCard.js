import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import starImg from "../../images/star.png";

const StyledBookCard = styled.div`
    width: 22rem;
    height: 22rem;
    background: #F0F0F0;
    margin: 1rem;
    border-radius: 10px;

    a {
        text-decoration: none;
        color: #05182a;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .img-plus-rating {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 55%;

        .img-box {
            height: 90%;
            width: 100%;
            padding: 0.5rem;

            img {
                height: 100%;
                width: 100%;
            }
        }
        .rating {
            width: 100%;

            img {
                margin-left: 0.25rem;
                margin-right: 0.25rem;
            }
        }
    }

    .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 45%;
        padding: 1rem;

        h4 {
            margin-bottom: 1rem;
        }
        h5 {
            margin-bottom: 0.5rem;
        }
        p {
            /*  */
        }
    }
`;

export function BookCard(props) {
    const { book, reviews, fetchReviews } = props;
    
    useEffect(() => {
        fetchReviews(book.id); 
    }, [])
    const generateStarArray = () => {
        if (reviews && reviews[0].book_id === book.id) {
            const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
            const roundedAverageRating = Math.round(averageRating);
            let starArray = [1, 2, 3, 4, 5];
            console.log(book.id, reviews, averageRating, roundedAverageRating, starArray.slice(0, roundedAverageRating));
            return starArray.slice(0, roundedAverageRating);
        }
    }
    const starArray = generateStarArray();

    return (
        <StyledBookCard>
            <NavLink to={`/book/${book.id}`}>
                <div className="img-plus-rating">
                    <div className="img-box">
                        <img src={book.cover_image} alt="cover image" />
                    </div>
                    <div className="rating">
                        {(!starArray && <h6>No rating yet!</h6>) || starArray.map(i => (
                            <img src={starImg} alt="star" key={i} />
                        ))}
                    </div>
                </div>
                <div className="text-box">
                    <h4>{book.title}</h4>
                    <h5>{book.author}</h5>
                    <p>@ {book.publisher}</p>
                </div>
            </NavLink>
        </StyledBookCard>
    )
}

export default connect(
	state => ({reviews: state.reviews, fetchReviews: state.fetchReviews}),
	actionCreators
)(BookCard);