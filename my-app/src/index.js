import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import App from './App';
import Clock from './Clock';
import LaserButton from './LaserButton';
import ActionLink from './ActionLink';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Temperature';
import WelcomeDialog from './WelcomeDialog';
import SignUpDialog from './SignUpDialog';
import SplitPane from './SplitPane';
import FilterableProductTable from './FilterableProductTable';
import WarningToggle from './WarningToggle';
import './index.css';

class Page extends Component {
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
        <WarningToggle />
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
