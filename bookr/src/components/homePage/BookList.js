import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";

import BookCard from "./BookCard";

const StyledBookList = styled.div`
    height: 100vh;
    background: red;
    padding: 2rem;
`;

export function BookList(props) {
    return (
        <StyledBookList>
            <BookCard />
        </StyledBookList>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookList);