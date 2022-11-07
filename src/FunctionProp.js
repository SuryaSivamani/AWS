import React from 'react';

import FunctionChildProps from './FunctionChildProps';
function FunctionProp(props) {
    const values= {firstname:"Surya",
                    lastname:"Sivamani"};
    

    return (
        <div>
            <FunctionChildProps values={values}/>
            {/* <h4>{props.id}</h4> */}
            {/* <h1>This is {props.title}'s </h1> */}
        </div>

    );
}

// FunctionProp.defaultProps={
//     title:"Surya"
// }
export default FunctionProp;