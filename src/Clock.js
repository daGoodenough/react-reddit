import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({date: new Date()})
  }

  componentDidMount () {
    this.intervalID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {

    return (
      <div>
        <h1>Hello World!</h1>
        <h1>It is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
