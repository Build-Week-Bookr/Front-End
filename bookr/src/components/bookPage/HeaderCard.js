import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

const StyledHeaderCard = styled.div`
    height: 20rem;
    background: #F0F0F0;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 1rem;

    h3 {
        margin-bottom: 1rem;
    }
    h4 {
        margin-bottom: 0.5rem;
    }
    h5 {
        margin-top: 2rem;
    }
`;

export function HeaderCard(props) {
    const { bookId, book, fetchBook } = props;
    
    useEffect(() => {
        fetchBook(bookId);
    }, []);

    return (
        <StyledHeaderCard>
            {(!book && <h5>Loading Book...</h5>) ||
                <>
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                    <p>{book.publisher}</p>
                </>
            }
        </StyledHeaderCard>
    )
}

export default connect(
    state => state,
    actionCreators
)(HeaderCard);

