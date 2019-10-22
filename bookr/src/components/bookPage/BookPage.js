import React from "react";
import styled from "styled-components";
import HeaderCard from "./HeaderCard";
import ReviewList from "./ReviewList";
import { NavLink } from "react-router-dom"

const StyledBookPage = styled.div`
    width: 100%;
    background: red;
    padding: 2rem;
`;

export default function BookPage(props) {
    const id = parseInt(props.match.params.id);

    return (
        <StyledBookPage>
            <NavLink to="/books">Back</NavLink><br/>
            <HeaderCard id={id} />
            <ReviewList id={id}/>
        </StyledBookPage>
    )
}