import React, { useEffect, useState, useRef} from 'react';

function Ref(props) {

    const [inp, setInput] = useState(" ");
    const count=useRef(0)

    useEffect(()=>{
        count.current = count.current+1;
    })
    return (
        <div>
            <input
            type="text"
            value={inp}
            onChange={(e)=>setInput(e.target.value)}></input>
            <h1>I have Rendered the {count.current}</h1>
        </div>
    );
}

export default Ref;