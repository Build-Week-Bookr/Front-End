import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import NavBar from '../navBar/NavBar'

import BookCard from "./BookCard";

const StyledBookList = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #b3b3b3;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export function BookList(props) {
    const { books, fetchBooks, clearBook, clearReviews } = props;

    useEffect(() => {
        fetchBooks(props.history);
        clearBook();
        clearReviews();
    }, []);

    return (
        <>
            <StyledBookList>
                {(books.length === 0 && <p>loading books...</p>) ||
                    (books.length !== 0 && books.map(book => (
                        <BookCard book={book} key={book.id} />
                    )))}
            </StyledBookList>
            </>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookList);