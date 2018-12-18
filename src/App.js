import React from 'react';
import './App.css';
import Summary from './Summary.js';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
         <h1 className="title">Skimmer</h1>
          <div className="column" >
            <textarea cols={70} rows={40} value={this.state.value} onChange={this.handleChange} placeholder='Please enter text'/>
          </div>
          <Summary className="column" value={this.state.value} />
      </div>
    );
  }
}

export default App;
