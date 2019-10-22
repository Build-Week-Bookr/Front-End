import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: #F0F0F0;
    margin: 1rem;
    /* padding: 1rem; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .text-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding: 1rem;
        overflow: hidden;

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
`;

export default function BookCard(props) {
    const { book } = props;

    return (
        <StyledBookCard>
            <NavLink to={`/book/${book.id}`}>
                <div className="text-box">
                    <h4>{book.title}</h4>
                    <h5>{book.author}</h5>
                    <p>{book.publisher}</p>
                </div>
            </NavLink>
        </StyledBookCard>
    )
}