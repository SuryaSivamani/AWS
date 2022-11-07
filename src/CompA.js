import React, { useState } from 'react';

function CompA(props) {

    const[count,setCount]=useState(0)
    function increment()
    {
        setCount(count+1)
    }
    return (
        <div>
            <h2>{count}</h2>
        </div>
    );
}

export default CompA;