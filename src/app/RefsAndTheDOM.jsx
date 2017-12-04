import React from 'react';
import ReactDOM from 'react-dom';

class RefTest extends React.Component{

    constructor(props){
        super(props);

        this.handleAdd=this.handleAdd.bind(this);
    }

    handleAdd(){
        alert(ReactDOM.findDOMNode(this.refs.first)+ReactDOM.findDOMNode(this.refs.second));

    }

    render(){
        return(
            <div>
                <input type="text" ref="first"/>
                <input type="text" ref="second"/>
                <input type="button" value="Add" onClick={this.handleAdd}/>
            </div>
        );




    }
}

export default RefTest;