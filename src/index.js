import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const AppHeader = () => {
    return React.createElement('h1', { className: 'app-header' }, 'Pongboard');
};

const Game = () => {
    return (
        React.createElement('ul', {},
            React.createElement('li', {}, 'Player 1'),
            React.createElement('li', {}, 'Player 2'),
        )
    )
};

ReactDOM.render(
    React.createElement('div', {},
        React.createElement(AppHeader, {}, null),
        React.createElement(Game, {}, null),
    ),
    document.getElementById('root'),
);

