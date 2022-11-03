import React, { Component } from 'react';

class ContactManage extends Component {
    state ={
        name: "",
        email:""
    };

    
    add =() =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "")
        {
            alert ("All the feilds are mandatory")
            return 
        }
        this.props.contactManageHandler(this.state);
        this.setState({name:"",email:""});
      console.log(this.state)
        
    }

    render() {
        return (
            <div className='container'>
                <h2>Add Contact</h2>
                <form className='form' onSubmit={this.add}>
                    <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter the name' name="name" 
                    value= {this.state.name} 
                    onChange={(e)=> this.setState({name:e.target.value})}></input>
                    </div>
                    <div className='field'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter the email' name="email"
                    value={this.state.email}
                    onChange={(e)=> this.setState({email:e.target.value})}></input>
                    </div>
                    <button className='btn'>Add
                        </button>       
                     </form>
            </div>
        );
    }
}

export default ContactManage;