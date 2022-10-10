import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import  thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer);
const store = createStore(
   rootReducer, 
   composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
