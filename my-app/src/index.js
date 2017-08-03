import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-test">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class LaserButton extends React.Component {
    activateLasers() {
        console.log("Lasers!!!! Piu piu");
    }

    render() {
        return (
            <button onClick={this.activateLasers}>
                Activate Lasers
            </button>
        );
    }
}

class ActionLink extends React.Component {
    handleClick(e) {
        e.preventDefault();
        console.log("Msg: " + this.props.message);
    }

    render() {
        return (
            <a href="#" onClick={this.handleClick.bind(this)}>
                Click me
            </a>
        )
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // to make function work in callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

const element = (
    <div>
        <Clock />
        <App />
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author} />
        <div>
            <LaserButton />
        </div>
        <div>
            <ActionLink message="Test link" />
        </div>
        <div>
            <Toggle />
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
