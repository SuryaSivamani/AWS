import React, { Component } from 'react';

class Counter extends Component {
    constructor()
    {
        super();
        this.state={
            counter: 0,
            value:''
        }
        this.countNum= this.countNum.bind(this)
        this.display= this.display.bind(this)
    }
    
    countNum()
    {
        this.setState((a) =>
        {
            return {counter: a.counter+1}
        }
        )    
    }

    display(e)
    {
        this.setState(
            {
                value:e.target.value
            }
        )
    }
    
    render() {
        return (
            <div>
                <button onClick={this.countNum}>Click for count</button>
                <br></br>
                <input type="text" id="Name" onChange={this.display} />
                <p>Number of count is {this.state.counter}</p>
                <p>The Input value is {this.state.value} </p>
            </div>
        )
    }
}

export default Counter;