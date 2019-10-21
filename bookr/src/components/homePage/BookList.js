import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";

import BookCard from "./BookCard";

const StyledBookList = styled.div`
    height: 100vh;
    background: red;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
`;

export function BookList(props) {
    const { books } = props;

    return (
        <StyledBookList>
            {books.map(book => (
                <BookCard id={book.id} key={book.id} />
            ))}
        </StyledBookList>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookList);