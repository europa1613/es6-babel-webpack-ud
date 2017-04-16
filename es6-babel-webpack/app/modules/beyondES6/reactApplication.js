import React from 'react';
import { render } from 'react-dom';
import JokesComponent from './components/JokesComponent';

const reactApp = () => {
    render( < JokesComponent / > , document.getElementById('content'));
}

export default reactApp;
