import React from 'react';
import './App.css';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import LogIn from './components/logIn&signUp/LogIn';
import SignUp from './components/logIn&signUp/SignUp';
import * as reducers from './state/reducers';


const rootReducer = combineReducers({
  count: reducers.countReducer,
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
        <Counter />
        <SignUp />
        <LogIn />
      </div>
    </Provider>
  );
}

export default App;
