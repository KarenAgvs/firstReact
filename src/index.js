import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {Header} from '../src/Components/Layouts/Header/Header.jsx';
import {Body} from '../src/Components/Layouts/Body/Body.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
