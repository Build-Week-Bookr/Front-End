import React from 'react';
import './App.css';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import { Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Counter from './components/Counter';
import BookList from './components/homePage/BookList';
import BookPage from "./components/bookPage/BookPage";

const rootReducer = combineReducers({
  count: reducers.countReducer,
  books: reducers.booksReducer,
  reviews: reducers.reviewsReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
        <Route exact path="/" render={() => (
          <>
            <NavLink to="/books">Books</NavLink>
            <br />
            <NavLink to="/book/1">Book Page 1</NavLink>
            <NavLink to="book/2">Book Page 2</NavLink>
          </>
        )} />
        <Route path="/books" render={props => PrivateRoute(BookList, props)} />
        <Route path="/book/:id" render={props => PrivateRoute(BookPage, props)} />
      </div>
    </Provider>
  );
}

export default App;
