import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actionCreators from "../../state/actionCreators";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const StyledNewBookForm = styled.div`

`;

export function NewBookForm(props){
    const { addBook, fetchBooks, authedUserId } = props;

    const validationSchema = yup.object().shape({
        title: yup.string().required("*title required"),
        author: yup.string().required("*author required"),
        publisher: yup.string().required("*publisher required"),
        synopsis: yup.string().test(
            "synopsis",
            "*synopsis must be at least 30 characters long",
            value => value && value.toString().length >= 30
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
                            <ErrorMessage name="title" component="div" />
                        </div>
                        <div className="field">
                            <Field name="author" type="text" placeholder="Author" />
                            <ErrorMessage name="author" component="div" />
                        </div>
                        <div className="field">
                            <Field name="publisher" type="text" placeholder="Publisher" />
                            <ErrorMessage name="publisher" component="div" />
                        </div>
                        <div className="field">
                            <Field name="synopsis" type="text" placeholder="Short Synopsis" />
                            <ErrorMessage name="synopsis" component="div" />
                        </div>
                        <div className="field">
                            <Field name="cover_image" type="text" placeholder="Cover Image URL" />
                            <ErrorMessage name="cover_image" component="div" />
                        </div>
                        <div className="field">
                            <Field name="purchase_url" type="text" placeholder="Purchase URL" />
                            <ErrorMessage name="purchase_url" component="div" />
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