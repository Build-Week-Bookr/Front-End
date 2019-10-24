import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DynamicStars from "../DynamicStars";

const StyledBookCard = styled.div`
    width: 25rem;
    height: 24rem;
    background: #F0F0F0;
    margin: 1rem;
    border-radius: 10px;
    padding: 0.5rem;

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
    }
`;

export default function BookCard(props) {
    const { book } = props;

    return (
        <StyledBookCard>
            <NavLink to={`/book/${book.id}`}>
                <div className="img-plus-rating">
                    <div className="img-box">
                        <img src={book.cover_image} alt="cover image" />
                    </div>
                    <DynamicStars bookId={book.id} />
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