import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

const StyledModal = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F0F0F0;
    border: 2px solid #05182a;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 1rem;
`;

export function Modal(props) {
    const { modalState } = props;
    const { triggered, message } = modalState;

    return (
        triggered &&
            <StyledModal>
                <h6>{message}</h6>
            </StyledModal>
    )
}

export default connect(
    state => state,
    actionCreators
)(Modal);