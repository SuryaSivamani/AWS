import React, { Component } from 'react';
import ClassChildProps from './ClassChildProps';
// import FunctionProp from './FunctionProp';

class ClassProps extends Component {

    render() {
        return (
            <div>
                {/* <FunctionProp id="ClasstoFunction" /> */}
                <ClassChildProps lastname="Sivamani"></ClassChildProps>
            </div>
        );
    }
}

export default ClassProps;