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

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.props.flavours[this.state.value]);
    event.preventDefault();
  }

  render() {
    const flavours = this.props.flavours;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            {Object.keys(flavours).map((key) =>
              <option key={key}
                      value={key}>
                {flavours[key]}
              </option>
            )}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

class BoilingVerdict extends React.Component {
  render() {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
  }
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTemperatureChange(event.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({
      temperature,
      scale: 'c'
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      temperature,
      scale: 'f'
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class FancyBorder extends React.Component {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class Dialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {this.props.title}
        </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
        {this.props.children}
      </FancyBorder>
    );
  }
}

class WelcomeDialog extends React.Component {
  render() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(event) {
    this.setState({login: event.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sing Me Up!
        </button>
      </Dialog>
    );
  }
}

class SplitPane extends React.Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {this.props.left}
        </div>
        <div className="SplitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>
  }
}

class ProductRow extends React.Component {
  render() {
    const name = (
      <span className={'ProductRow ProductRow-' + (this.props.product.stocked ? 'ok' : 'out')}>
        {this.props.product.name}
      </span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  } 
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
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
    const messages = ['React', 'Re: React', 'Re:Re: React'];

    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    const flavours = {
      grapefruit: "Grapefruit",
      lime: "Lime",
      coconut: "Coconut",
      mango: "Mango",
    }

    const products = [
      {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
      {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
      {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
      {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
      {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
      {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ]

    return (
      <div>
        <div>
          <WarningBanner warning={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
        <WelcomeDialog />
        <div>
          <SignUpDialog />
          <LoginControl />
        </div>
        <div>
          <SplitPane
            left={
              <div>
                <Mailbox unreadMessages={messages} />
                <Clock />
              </div>
            }
            right={
              <App />
            } />
        </div>
        <div>
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
          <NameForm />
          <EssayForm />
          <FlavorForm flavours={flavours} />
          <Reservation />
          <Calculator />
          <FilterableProductTable products={products} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
