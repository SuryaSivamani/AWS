import React from 'react';
import { useState } from 'react';

function ReactCheckboxAssign(props) {
    const hobbies=[
        //Creating an array object for the list
        {value:"Sports", label:"Sports"},
        {value:"Travel",label:"Travel"},
        {value:"Reading", label:"Reading"}
    ];

    const [hobby, setHobbies] =useState([]); // creating an empty array to store the value
    console.log(hobby.length);
    const handleChange = (e)=>{
        const {value, checked} =e.target; // Destructuring
        if (checked) {
            setHobbies(previousState  => [...previousState , value]);
          } else {
            setHobbies(previousState  => previousState.filter(x => x !== value));
          }
    }

    return (
        <div>
             <h2>My Hobbies are:</h2>
            {/* Sports<input onChange={checkHandler} type="checkbox" name='hobby' value="Sports" checked={isChecked}/>
            Travel<input onChange={checkHandler} type="checkbox" name='hobby' value="Travel" checked={isChecked}/>
            Cooking<input onChange={checkHandler} type="checkbox" name='hobby' value="Cooking" checked={isChecked}/>
            Reading<input onChange={checkHandler} type="checkbox" name='hobby' value="Reading" checked={isChecked}/> */}
            {/* { hobbies.map((d,index) => 
                    (
                    <div key={d.value}>
                        <input
                        type="checkbox"
                        name="lang"
                        checked={d.select}
                        // value={value}
                        onChange={(e)=>{
                            let checked=e.target.checked;
                            setHobbies(hobbies.map(data=>{
                                    if(d.value===data.value)
                                    {
                                        data.select=checked;
                                    }
                                    return data
                            }))
                        }}
                       />
                       
                       <label>{d.label}</label>
                       </div>) )}
                       <div>{hobbies.values}</div>
            </div> */}
             {hobbies.map((val, i) => 
             <label key={i}>
             <input
          type="checkbox"
          name="lang"
          value={val.value}
          onChange={handleChange}
        /> {val.label}
      </label>)}
               
      <div>My hobbies are: {hobby.length ? hobby.join(', ') : null}</div>
   
        </div>
    );
}

export default ReactCheckboxAssign;