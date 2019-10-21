import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: green;
    margin: 0.5rem;
`;

export function BookCard(props) {
    const { id, books } = props;
    const book = books.find(book => book.id === id);

    return (
        <StyledBookCard>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.publisher}</p>
        </StyledBookCard>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookCard);