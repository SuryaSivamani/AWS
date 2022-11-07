import React from 'react';

function FunctionChildProps(props) {
    console.log(props)
    const{firstname,lastname}=props.values
    return (
        <div>
            
                {/* {props.values.map(
                    function namesIterator(item,i){
                        return (item.firstname)
                                
                            
                     } )} */}
            <h2>{firstname}</h2>
            <h2>{lastname}</h2>
        </div>
    );
}

export default FunctionChildProps;