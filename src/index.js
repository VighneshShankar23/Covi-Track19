import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './App';
import store from './app/store';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      (<Provider store={store}>
        <App />
      </Provider>)
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);