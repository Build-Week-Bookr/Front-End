import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const StyledNewBookForm = styled.div`

`;

export function NewBookForm(props){
    const { addBook, fetchBooks } = props;

    const onSubmit = formValues => {
        addBook(formValues);
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
                onSubmit={onSubmit}
                render={props => (
                    <Form>
                        <div className="field">
                            <Field name="title" type="text" placeholder="Book Title" />
                        </div>
                        <div className="field">
                            <Field name="author" type="text" placeholder="Author" />
                        </div>
                        <div className="field">
                            <Field name="publisher" type="text" placeholder="Publisher" />
                        </div>
                        <div className="field">
                            <Field name="synopsis" type="text" placeholder="Short Synopsis" />
                        </div>
                        <div className="field">
                            <Field name="cover_image" type="text" placeholder="Cover Image URL" />
                        </div>
                        <div className="field">
                            <Field name="purchase_url" type="text" placeholder="Purchase URL" />
                        </div>
                        <button type="submit">Submit Book</button>
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