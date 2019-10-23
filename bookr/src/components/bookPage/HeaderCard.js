import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import starImg from "../../images/star.png";

const StyledHeaderCard = styled.div`
    height: 20rem;
    background: #F0F0F0;
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

        .img-box {
            width: 100%;
            height: 85%;
            padding-bottom: 5%;

            img {
                width: 100%;
                height: 100%;
            }
        }
        .rating {
            height: 10%;
        }
    }

    .text-box {
        flex-grow: 1;
        padding: 1rem;
        padding-left: 0;

        h3 {
            margin-bottom: 1rem;
        }
        h4 {
            margin-bottom: 0.5rem;
        }
        p {
            margin-bottom: 1rem;
        }
        a {
            text-decoration: none;
            border: 2px solid #05182a;
            border-radius: 5px;
            width: 3rem;
            padding: 0.5rem;
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
                        <div className="rating">
                        {starArray.map(i => (
                            <img src={starImg} alt="star" key={i} />
                        ))}
                    </div>
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
