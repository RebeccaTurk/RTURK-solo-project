import React from 'react'; // import react module
import Screen from './Screen.jsx'; // Import our screen component from this directory
import Button from './Button.jsx'; // Import our button component from this directory
import ScreenRow from './ScreenRow.jsx';

// create a class which extends react component
class Frame extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      question: '',
      answer: '',
      prevAnswer: ''
    }
    // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
    // We did this because 'this' would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }

  // Render function to creat component to be rendered on the DOM.
  // This method must return a single parent element as you can see here. 
  // The component is wrapped around () to make it a single expression.
  render() {
    return (
      <div className="frame">
        <div className="calculator-title">
          Calculator with Memory!
        </div>
        <Screen question={this.state.question} prevAnswer={this.state.answer} answer={this.state.answer}/>
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='action' />
          <Button label={'+'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='action' />
          <Button label={'/'} handleClick={this.handleClick} type='action' />
        </div>
        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'Clear'} handleClick={this.handleClick} type='action' />
          <Button label={'='} handleClick={this.handleClick} type='action' />
        </div>
      </div>
    );
  }

  // our method to handle all click events from our buttons
  handleClick(event){
    // {const prevAnswersArr = []};
    const value = event.target.value; // get the value from the target element (button)
    console.log('event.target.value: ', event.target.value)
    switch (value) {
      case '=': { // if it's an equal sign, use the eval module to evaluate the question
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state.
        console.log('this.state inside handleClick: ', this.state);
        console.log('answer: ', answer);        
        this.setState({answer});
        break;
      }
      case 'Clear': {
        // if it's the Clear sign, just clean our question and answer in the state
        this.setState({ question: '', prevAnswer: this.state.prevAnswer, answer: ''});
        console.log('this.state after Clear setState: ', this.state);
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        this.setState({ question: this.state.question += value, prevAnswer: this.state.answer});
        // {prevAnswersArr.push(this.state.answer)}
        console.log('this.state after default setState: ', this.state);
        break;
      }
    }
    console.log('this.state after setState & switch: ', this.state);
    // console.log('prevAnswerArr: ', {prevAnswersArr});
  }
}


// export our frame component. To be used in our client/index.js file
export default Frame;