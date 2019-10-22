import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">Home</NavLink>
            {books.map(book => (
                <BookCard book={book} key={book.id} />
            ))}
        </StyledBookList>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookList);