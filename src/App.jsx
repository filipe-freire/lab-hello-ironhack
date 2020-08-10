import React, { Component } from 'react';

import './App.css';

// My code below
function MessageComponent() {
  return (
    <div>
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="./images/ironhack-logo.svg" className="App-logo" alt="logo" />
        </nav>
        <header className="App-header">
          <MessageComponent className="" />
          <button>Awesome!</button>
        </header>
        <section>
          <div className="flex-row">
            <div className="flex-col">
              <img className="flex-img" src="./images/icon1.png" alt="" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </div>

            <div className="flex-col">
              <img className="flex-img" src="./images/icon2.png" alt="" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>

            <div className="flex-col">
              <img className="flex-img" src="./images/icon3.png" alt="" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the components.</p>
            </div>

            <div className="flex-col">
              <img className="flex-img" src="./images/icon4.png" alt="" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
