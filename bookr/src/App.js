import React from 'react';
import './App.css';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';

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
        {/* <BookList /> */}
        <BookPage id={1} /> {/* id accessed from history object once router is set up? */}
      </div>
    </Provider>
  );
}

export default App;
