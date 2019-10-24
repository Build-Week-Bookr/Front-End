import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";

import DynamicStars from "../DynamicStars";

const StyledHeaderCard = styled.div`
    min-height: 20rem;
    background: #F0F0F0;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    display: flex;

    .img-plus-rating {
        height: 100%;
        min-width: 15rem;
        max-width: 15rem;
        padding: 1rem;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        .img-box {
            width: 100%;
            height: 85%;
            padding-bottom: 5%;

            img {
                width: 100%;
                height: 100%;
            }
        }
        .stars {
            height: 10%;
        }
    }

    .text-box {
        flex-grow: 1;
        padding: 1rem;
        padding-left: 0;
        margin-bottom: 1rem;

        h3 {
            margin-bottom: 1rem;
        }
        h4 {
            margin-bottom: 0.5rem;
        }
        p {
            margin-bottom: 1rem;

            &:nth-of-type(2) {
                margin-bottom: 2rem;
            }
        }
        a {
            text-decoration: none;
            border: 2px solid #05182a;
            border-radius: 5px;
            width: 3rem;
            padding: 0.5rem 1rem;
        }
    }
`;

export function HeaderCard(props) {
    const { bookId, book, fetchBook } = props;
    const starArray = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchBook(bookId);
    }, []);

    return (
        <StyledHeaderCard>
            {(!book && <h5>Loading Book...</h5>) ||
                <>
                    <div className="img-plus-rating">
                        <div className="img-box">
                            <img src={book.cover_image} alt="cover image" />
                        </div>
                        <DynamicStars bookId={bookId} />
                    </div>
                    <div className="text-box">
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <p>@ {book.publisher}</p>
                        <p>{book.synopsis}</p>
                        <a href={book.purchase_url}>
                            Purchase Book
                        </a>
                    </div>
                </>
            }
        </StyledHeaderCard>
    )
}

export default connect(
    state => state,
    actionCreators
)(HeaderCard);
