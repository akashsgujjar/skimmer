import React from 'react';
import './App.css';

class Summary extends React.Component {

  constructor(props) {
    super(props)
    this.truncate = this.truncate.bind(this);
  }
    
  truncate() {
      const para = this.props.value;
//      const sentences = para.split(".");
//      const listItems = sentences.map(phrase => <li>{phrase}</li>);
//            return (<ul>{listItems}</ul>);

      const words = para.split(" ");
      var tally = {};
      for (var i = 0; i < words.length; i++) {
          var word = words[i];
          
          if(tally[word] == null){
              tally[word] = 1;
          }
          else{
              tally[word] = tally[word]+1;
          }
          //tally[words[i]] = 1;
      }
      
      console.log(tally);
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