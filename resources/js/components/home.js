import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <h1>Hello React!</h1>
    );
}

if (document.getElementById('hello')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello'));
}