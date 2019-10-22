import React, { useEffect } from "react";
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
    const { books, fetchBooks, clearReviews } = props;

    useEffect(() => {
        fetchBooks(props.history);
        clearReviews();
    }, []);

    return (
        <>
            {books.length === 0 && <p>loading books...</p>}
            {books.length !== 0 &&
                <StyledBookList>
                    <NavLink to="/">Home</NavLink>
                    {books.map(book => (
                        <BookCard book={book} key={book.id} />
                    ))}
                </StyledBookList>}
        </>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookList);