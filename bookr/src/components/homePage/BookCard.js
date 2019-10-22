import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: green;
    margin: 0.5rem;
    
    a {
        text-decoration: none;
        color: #05182a;
    }
`;

export default function BookCard(props) {
    const { book } = props;

    return (
        <StyledBookCard>
            <NavLink to={`/book/${book.id}`}>
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p>{book.publisher}</p>
            </NavLink>
        </StyledBookCard>
    )
}