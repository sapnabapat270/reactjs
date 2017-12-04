
import React from 'react';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


/*
class ComponentsAndProps extends React.Component {
    render() {
        return (
            <div>
            <Welcome name="Sapna"/>
            <Welcome name="Niki"/>
            </div>
    );
    }
}

*/


function Comment(props){
    //props.name="hi"; if this is uncommented it gives the error props.name is readonly while run time not during compile time
    return <h2> {props.name}</h2>
}

class ComponentsAndProps extends React.Component{

    render(){
        const post={
            user:"Monika",
            date:"21 Nov",
            comment:"See you soon"
        };

        return(
            <div>
                <Comment name={post.user}/>
                <Comment name={post.date}/>
                <Comment name={post.comment}/>
            </div>
        );
    }
}

export default ComponentsAndProps;
