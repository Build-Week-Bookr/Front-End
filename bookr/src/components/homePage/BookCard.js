import React from "react";
import styled from "styled-components";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: green;
    margin: 0.5rem;
`;

export default function BookCard(props) {
    const { book } = props;

    return (
        <StyledBookCard>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.publisher}</p>
        </StyledBookCard>
    )
}