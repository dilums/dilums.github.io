import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const base = <Router><App/></Router>
ReactDOM.render(base, document.getElementById('root'));

