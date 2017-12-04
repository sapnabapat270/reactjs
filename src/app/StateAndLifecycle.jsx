import React from 'react';
/*


class StateAndLifeCycle extends React.Component{
        render(){
            return(
                <div>hfskdjfh</div>
            );
        }
}
*/


/*


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>This is the clock!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


class StateAndLifeCycle extends React.Component{
render(){
    return(
        <Clock/>
    );
}
}


*/



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
            console.log("component did mount");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        return (
            <div>
                <h1>Hello, world Lifecycle Demo!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class StateAndLifeCycle extends React.Component{
    render(){
        return(
            <Clock/>
        );
    }
}


export default StateAndLifeCycle;