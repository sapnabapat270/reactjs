import React from 'react';

/*class ControlledComponent extends React.Component{
    render(){
        return(
            <input type="text" value="init"/>
        );
    }
}

export default ControlledComponent;*/


class UncontrolledComponent extends React.Component{
    render(){
        const handleChange= function(e) {
            console.log(e.target.value);
        }
        return(
            <input type="text" onChange={handleChange} defaultValue="init"/>
        )

    }
}

export default UncontrolledComponent;