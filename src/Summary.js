import React from 'react';
import './App.css';

class Summary extends React.Component {

  constructor(props) {
    super(props)
    this.truncate = this.truncate.bind(this);
    this.filtering = this.filtering.bind(this);
    this.tallying = this.tallying.bind(this);
  }
  truncate() {
      var para = this.props.value;
      console.log('para' + para);
      const sentences = para.split(".");
      var listItems;     
      var filteredSentences = sentences.map(sentence =>this.filtering(sentence));                                          
      listItems = filteredSentences.map(phrase => <li>{phrase + ' '}</li>);
      return (<ul>{listItems}</ul>);
  }
  filtering(sentence){
      var words = sentence.split(" ");
    const remove = [
        'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'while', 'still',
        'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at', 'though', 'i', '—',
        'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she', 'or', 'will', 'an', 
        'my', 'one', 'all', 'would', 'there', 'their', 'what', 'so', 'up', 'out', 'if', 'about', 
        'who', 'get', 'which', 'go', 'when', 'me', 'make', 'can', 'like', 'time', 'no', 'just', 
        'him', 'know', 'take', 'person', 'into', 'year', 'your', 'good', 'some', 'could', 'them', 
        'see', 'other', 'than', 'then', 'now', 'look', 'only', 'come', 'its', 'over', 'think', 
        'also', 'back', 'after', 'use', 'two', 'how', 'our', 'first', 'well', 'way', 'even', 'has', 
        'new', 'want', 'because', 'any', 'these', 'give', 'day', 'most', 'us', 'is', 'are', 'was'];
      
      const filterWords = words.filter(word1 => remove.indexOf(word1) < 0);
      var compound = "";
      for(var i = 0; i < filterWords.length; i++){
        compound += filterWords[i] + " ";
      }
      return compound;
  }
  tallying(sentence){
      var tally = [];
      for (var i = 0; i < sentence.length; i++) {
          var word = sentence[i];
          
          if(tally[word] == null){
              tally[word] = 1;
          }
          else{
              tally[word] = tally[word]+1;
          }
      }
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