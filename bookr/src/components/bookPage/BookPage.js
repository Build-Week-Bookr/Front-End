import React from "react";
import styled from "styled-components";
import HeaderCard from "./HeaderCard";
import ReviewList from "./ReviewList";
import { NavLink } from "react-router-dom"
import DeleteButton from "./DeleteButton";

const StyledBookPage = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #b3b3b3;
    padding: 2rem;

    a {
        text-decoration: none;
        font-weight: bold;
        border: 2px solid black;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        background: #F0F0F0;
    }
`;

export default function BookPage(props) {
    const bookId = parseInt(props.match.params.id);

    return (
        <StyledBookPage>
            <NavLink to="/books">Back</NavLink><br/>
            <HeaderCard bookId={bookId} />
            <ReviewList bookId={bookId} />
            <DeleteButton history={props.history} />
        </StyledBookPage>
    )
}