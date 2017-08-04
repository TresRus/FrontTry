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

class UserGreeting extends React.Component {
    render() {
        return <h1>Welcome back!</h1>;
    }
}

class GuestGreeting extends React.Component {
    render() {
        return <h1>Please sing up.</h1>;
    }
}

class Greeting extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        }

        return <GuestGreeting />;
    }
}

class LoginButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }
}

class LogoutButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    }
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }
}

class Mailbox extends React.Component {
    render() {
        const unreadMessages = this.props.unreadMessages;

        return (
            <div>
                <h1>Mail:</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
            </div>
        )
    }
}

class WarningBanner extends React.Component {
    render() {
        if (!this.props.warning) {
            return null;
        }

        return (
            <div className="warning">
                Warning!
            </div>
        );
    }
}

class ListItem extends React.Component {
    render() {
        return <li>{this.props.value}</li>;
    }
}

class NumberList extends React.Component {
    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} /> 
        );

        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

class Blog extends React.Component {
    render() {
        const sidebar = (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );

        const content = (
            this.props.posts.map((post) =>
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )
        );

        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
        ];

        return (
            <div>
                <div>
                    <WarningBanner warning={this.state.showWarning} />
                    <button onClick={this.handleToggleClick}>
                        {this.state.showWarning ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div>
                    <LoginControl />
                    <Mailbox unreadMessages={messages} />
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
                    <NumberList numbers={numbers} />
                    <Blog posts={posts} />
                </div>
            </div>
        );
    }
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
