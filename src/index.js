import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = createStore(movies);
console.log('store', store);
// console.log('BEFORE STORE', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }],
// })

// console.log('AFTER STORE', store.getState());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);


