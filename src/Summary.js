import React from 'react';
import './App.css';

class Summary extends React.Component {

  constructor(props) {
    super(props)
    this.truncate = this.truncate.bind(this);
  }
    
  truncate() {
      const para = this.props.value;
      const sentences = para.split(".");
      const listItems = sentences.map(phrase => <li>{phrase}</li>);
      return (<ul>{listItems}</ul>);
  }

  render() {
    return (
      <div className="result">
        <strong>Summary</strong>
        {this.truncate()}
      </div>
    );
  }
}

export default Summary;