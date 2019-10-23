import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import starImg from "../../images/star.png";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: #F0F0F0;
    margin: 1rem;
    border-radius: 10px;

    .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 100%;
        padding: 1rem;

        h4 {
            margin-bottom: 1rem;
        }
        h5 {
            margin-bottom: 0.5rem;
        }
        p {
            
        }
    }

    a {
        text-decoration: none;
        color: #05182a;
        width: 100%;
        height: 100%;
    }

    .stars img {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
    }
`;

export default function BookCard(props) {
    const { book } = props;
    const starArray = [1, 2, 3, 4, 5];

    return (
        <StyledBookCard>
            <NavLink to={`/book/${book.id}`}>
                <div className="text-box">
                    <h4>{book.title}</h4>
                    <h5>{book.author}</h5>
                    <p>{book.publisher}</p>
                </div>
                <div className="stars">
                    {starArray.map(i => (
                        <img src={starImg} alt="star" key={i} />
                    ))}
                </div>
            </NavLink>
        </StyledBookCard>
    )
}
