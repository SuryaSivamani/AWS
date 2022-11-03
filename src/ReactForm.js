import React, { useState } from 'react';

function ReactForm(props) {
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[dob,setDob]=useState("");
    const[address,setAddress]=useState("")


     const [val,setVal]=useState([])
    const add=(e)=>{
        e.preventDefault();
      if(name === "" || password === "" || dob ==="" || address ==="")
        {
            alert("Enter the value")
            return
        }
        setVal([
            ...val, 
            {
                id: val.length,
                name: name,
                password:password,
                dob:dob,
                address:address
            }
        ]);
            setName('');
            setPassword('');
            setDob('');
            setAddress('');
     }

    return (
        <div className='container'>
                <h2>Add Contact</h2>
                <form className='form' onSubmit={add}>
                    <div className='field'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter the name' name="name" 
                    value= {name} 
                    onChange={(e)=> setName(e.target.value)}></input>
                    </div>
                    <div className='field'>
                    <label>Password</label>
                    <input type="password" placeholder='Enter the password' name="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}></input>
                    </div>

                    <div className='field'>
                    <label>D.O.B</label>
                    <input type="date" name="dateofbirth"
                    value={dob}
                    onChange={(e)=> setDob(e.target.value)}></input>
                    </div>

                    <div className='field'>
                    <label>Address</label>
                    <input type="textarea" name="address" placeholder='Enter your Address'
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}></input>
                    </div>

                    <button className='btn'>Add
                        </button>       
                     </form>
                     
                     {val.map(item => (
                     <div> <label key={item.id}>
                        <br></br>
                        <p>UserName: {item.name}</p>
                        <p>Password: {item.password}</p>
                        <p>DateOfBith: {item.dob}</p>
                        <p>Address: {item.address}</p>
                       </label></div>
                       
                         ))}
                      
                    
            </div>
    );
}

export default ReactForm;