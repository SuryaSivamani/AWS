import React, { Component } from 'react';

class Inputfield extends Component {

    constructor()
    {
     super();
       this.state={
        firstName:'',
        lastName:'',
        fullName:''
       } 
       this.concate= this.concate.bind(this)
       this.concatSave=this.concatSave.bind(this)
    }
     
    concate(e)
    {
        this.setState({
            firstName:e.target.value,
            lastName:e.target.value
        })
    }

    concatSave()
    { 
    this.setState(
    {
      fullName:this.state.firstName + " " + this.state.lastName
    })
    }


    render() {
        return (
            <div>  
                    <label>Enter the First name </label>
                    <input type="text" onChange={this.concate}></input>
                    <label>Enter the Last name</label>
                    <input type="text" onChange={this.concate}></input>
                    <button onClick={this.concatSave}>Click to concat</button>
                    <p>{this.state.fullName }</p>
                    <p></p>
            </div>
        );
    }
}

export default Inputfield;