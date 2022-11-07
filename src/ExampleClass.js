import React, { Component } from 'react';

class ExampleClass extends Component {
    constructor()
    {
        super();
        this.state ={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
            this.setState({
              counter: 5
            });
            this.setState((prevState) => {
              return {
                counter: prevState.counter + 1
              };
            });
          this.setState((prevState) => {
              return {
                counter: prevState.counter + 1
              };
            }); console.log(this.state.counter)
       
      }
    render() {
       // const { counter } = this.state;
        return (
            <div>
                <div>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter value is {this.state.counter}</div>
      </div>
            </div>
        );
    }
}

export default ExampleClass;