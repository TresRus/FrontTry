import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function tick() {
    const element = (
        <dev>
            <h1>
                Hello, {formatName(user)}!
            </h1>
            <h2>
                It is {new Date().toLocaleTimeString()}.
            </h2>
        </dev>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
