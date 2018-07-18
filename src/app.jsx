import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import '../styles/main.css';

ReactDOM.render(
    <div> Hello World</div>, 
    document.getElementById('app')
  );

class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            output: ''
        }

//bind handleClick method, so that `this` refers to this component
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <div className = "frame">
                <div className ="main-title"> 
                    Calculator
                </div>
        <Screen input={this.state.input} output={this.state.output}/>
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
          <Button label={'Cls'} handleClick={this.handleClick} type='action' />
          <Button label={'='} handleClick={this.handleClick} type='action' />
        </div>
        </div>
        )
    }

    handleClick(event) {
        const value = event.target.value;
        switch(value) {
            case '=': {
                const output = eval(this.state.input).toString();
                this.setState({output});
                break;
            }
            default: {
                this.setState({input: this.state.input += value}) // REVISIT THIS LINE!
                break;
            }
        }
    } 
}

class Row extends Component {
    constructor(props) {
        super()
    }

    render() {
        return(
            <div className="row">
                <input type="text" value={props.value}/>
            </div>
        )
    }
}

class Screen extends Component {
    constructor(props) {
        super()
    }
    render() {
        return(
            <div className="screen">
                <Row value={props.input}/>
                <Row value={props.output}/>
            </div>
        )
    }
}

class Button extends Component {
    constructor(props) {
        super()
    }

    render() {
        return(
            <input
                type="button"
                class={props.type === 'action' ? 'button action-button' : 'button input-button'} // REVISIT THIS LINE
                onClick={props.handleClick}
                value={props.label}
            > </input>
        )
    }
}



export {App, Row, Screen, Button};
