import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

const StyledHeaderCard = styled.div`
    height: 20rem;
    background: green;
    margin-bottom: 1rem;
`;

export function HeaderCard(props) {
    const { id, book, fetchBook } = props;
    
    useEffect(() => {
        fetchBook(id);
    }, []);

    console.log(!book);
    return (
        <StyledHeaderCard>
            {(!book && <h2>Loading Book...</h2>) ||
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

