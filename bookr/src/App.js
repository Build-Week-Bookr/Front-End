import React from 'react';
import './App.css';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import LogIn from './components/logIn&signUp/LogIn';
import SignUp from './components/logIn&signUp/SignUp';
import BookList from './components/homePage/BookList';
import BookPage from "./components/bookPage/BookPage";
import NavBar from './components/navBar/NavBar';
import Logout from './components/logout/Logout';
import Modal from "./components/Modal";

const rootReducer = combineReducers({
  books: reducers.booksReducer,
  book: reducers.bookReducer,
  reviews: reducers.reviewsReducer,
  user: reducers.userReducer,
  modalState: reducers.modalReducer,
  signUpValues: reducers.signUpReducer,
  logInValues: reducers.logInReducer
})

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/books" render={props => PrivateRoute(BookList, props)} />
        <Route path="/book/:id" render={props => PrivateRoute(BookPage, props)} />
        <Route path="/logout" render={props => PrivateRoute(Logout, props)} />
        <Modal />
        {/* <Route path="/menu" component={NavBar}/> */}
      </div>
    </Provider>
  );
}

export default App;
