import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './reducers/';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

//import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider>
    <App />
  </Provider> ,
  document.getElementById('root')
);
