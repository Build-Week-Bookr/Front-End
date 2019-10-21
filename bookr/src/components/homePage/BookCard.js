import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

const StyledBookCard = styled.div`
    width: 20rem;
    height: 20rem;
    background: green;
`;

export function BookCard(props) {
    return (
        <StyledBookCard>
            <p>BOOK</p>
        </StyledBookCard>
    )
}

export default connect(
    state => state,
    actionCreators
)(BookCard);