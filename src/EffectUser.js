import React, { useEffect, useState } from 'react';

function EffectUser(props) {

    const[count,setCount] = useState(0);
    const[calculation,setCalculation] = useState(0);
    const[value, setValue] = useState(1);

    useEffect(()=>{
        setCalculation(()=>count*2+value);
    },[value])

    return (
        <div>
            <h3>{count}</h3>
            <button 
            onClick={()=>setCount((val)=>val+1)}>Add</button>
            <h3>Calculation: {calculation}</h3>
        </div>
    );
}

export default EffectUser;${email}
