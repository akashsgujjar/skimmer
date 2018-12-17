import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: 'Please enter some text.',
      summary: ''
    };

    this.updateSummary = this.updateSummary.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateSummary() {
    alert('changed value: ');
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header>
         <h1>Skimmer</h1>
        </header>

          <form onSubmit={this.setState({summary: this.state.value})}>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          </form>

          <p>{this.state.summary}</p>

      </div>
    );
  }
}

export default App;
