import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const StyledNewBookForm = styled.div`
    background: #b3b3b3;
    padding-top: 2rem;
    
    form {
        border: 2px solid #05182a;
        border-radius: 10px;
        width: 30rem;
        height: 22.5rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background: #F0F0F0;

        .field {
            margin-bottom: 0.5rem;

            input {
                width: 90%;
                height: 1.5rem;
                text-align: center;
                border-radius: 2px;
                background: #b3b3b3;
                font-family: 'Didact Gothic', sans-serif;
                color: #05182a;
                border: 2px solid #c8c8c8;
            }

            textarea {
                width: 90%;
                border-radius: 2px;
                background: #b3b3b3;
                resize: none;
                border: 2px solid #c8c8c8;
            }

            h6 {
                font-size: 0.8rem;
            }
        }

        .submit-button {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;

            button {
                width: 6rem;
                height: 2rem;
                border-radius: 2px;
                border: 2px solid #c8c8c8;
                font-family: 'Didact Gothic', sans-serif;
                color: #05182a;
                font-weight: bold;
                cursor: pointer;
            }
        }
    }
`;

export function NewBookForm(props) {
    const { addBook, fetchBooks, authedUserId } = props;

    const validationSchema = yup.object().shape({
        title: yup.string().required("*title required"),
        author: yup.string().required("*author required"),
        publisher: yup.string().required("*publisher required"),
        synopsis: yup.string().test(
            "synopsis",
            "*synopsis must be at least 256 characters long",
            value => value && value.toString().length >= 256
        ),
        cover_image: yup.string().url().required("*cover image must be a URL"),
        purchase_url: yup.string().url().required("*purchase url must be a URL"),
    });

    const onSubmit = formValues => {
        addBook(formValues, authedUserId);
        fetchBooks(props.history);
    }

    return (
        <StyledNewBookForm>
            <Formik
                initialValues={{
                    title: "",
                    author: "",
                    publisher: "",
                    synopsis: "",
                    cover_image: "",
                    purchase_url: "",
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                render={props => (
                    <Form>
                        <div className="field">
                            <Field name="title" type="text" placeholder="Book Title" />
                            <ErrorMessage name="title" component="h6" />
                        </div>
                        <div className="field">
                            <Field name="author" type="text" placeholder="Author" />
                            <ErrorMessage name="author" component="h6" />
                        </div>
                        <div className="field">
                            <Field name="publisher" type="text" placeholder="Publisher" />
                            <ErrorMessage name="publisher" component="h6" />
                        </div>
                        <div className="field">
                            <Field name="synopsis" type="text" component="textarea" placeholder="Short Synopsis" />
                            <ErrorMessage name="synopsis" component="h6" />
                        </div>
                        <div className="field">
                            <Field name="cover_image" type="text" placeholder="Cover Image URL" />
                            <ErrorMessage name="cover_image" component="h6" />
                        </div>
                        <div className="field">
                            <Field name="purchase_url" type="text" placeholder="Purchase URL" />
                            <ErrorMessage name="purchase_url" component="h6" />
                        </div>
                        <div className="submit-button">
                            <button type="submit">Submit Book</button>
                        </div>
                    </Form>
                )}
            />
        </StyledNewBookForm>
    )
}

export default connect(
    state => state,
    actionCreators
)(NewBookForm)