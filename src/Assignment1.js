import React, { Component } from 'react';

class Assignment1 extends Component {
    constructor()
    {
        super();
        this.state={
            TotalAmount:100,
            Insurance:'',
            ChildCare:'',
            Grocery:'',
            Mortgage:'',
            Total:''
        }
        this.getValue= this.getValue.bind(this)
        this.getBalance=this.getBalance.bind(this)
    }

    getValue(e)
    {
        this.setState({
            Insurance: e.target.value,
            ChildCare: e.target.value,
            Grocery: e.target.value,
            Mortgage:e.target.value
        })
    }

    getBalance(e)
    {
        this.setState({
            Total: parseInt(this.state.Insurance) + parseInt(this.state.ChildCare)
        })
    }
    render() {
        return (
            <div>
                <h2>React Assigment1</h2>
                <label>Total Monthly Budget: </label>
                <input type="number" value={this.state.TotalAmount}></input>
                <br></br>
                <input value={this.state.Total}>Balance from your monthly Budget is : {this.getBalance()}</input>
                <br></br>
                <p>Expense: </p>
                <label >Child Care :</label>
                <input type="number" onChange={this.getValue}></input>
                <br>
                </br>
                <label >Insurance :</label>
                <input type="number" onChange={this.getValue}></input>
                <br></br>
                <label >Mortgage :</label>
                <input type="number" onChange={this.getValue}></input>
                <br></br>
                <label >Grocery :</label>
                <input type="number" onChange={this.getValue}></input>

            </div>
        );
    }
}

export default Assignment1;