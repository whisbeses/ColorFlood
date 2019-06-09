import React, { Component } from 'react';
import FloodGame from './FloodGame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ gameOn: !this.state.gameOn })}>toggle</button>
        {this.state.gameOn ? <FloodGame width="5" height="5"/>: <div>Other content</div>}
      </div>
    );
  }
}

export default App;