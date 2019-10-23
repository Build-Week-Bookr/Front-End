import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

const StyledDeleteButton = styled.div`
    background: #F0F0F0;
    border-radius: 5px;
    height: 3rem;
    width: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 2rem;
    cursor: pointer;
    &:hover {
        background: #05182a;

        h6 {
            color: #F0F0F0;
        }
    }
`;

export function DeleteButton(props) {
    const { book, deleteBook, history } = props;

    const onClick = book => {
        deleteBook(book.id);
        history.push("/books");
    }

    return (
        <StyledDeleteButton onClick={book && (() => onClick(book))}>
            <h6>Delete Book</h6>
        </StyledDeleteButton>
    )
}

export default connect(
    state => state,
    actionCreators
)(DeleteButton);