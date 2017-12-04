import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ComponentsAndProps from './ComponentsAndProps.jsx';
import StateAndLifeCycle from './StateAndLifecycle.jsx';
import HandlingEvents from './HandlingEvents.jsx';
import ConditionalRendering from './ConditionalRendering.jsx';
import ListAndKeys from './ListAndKeys.jsx';
import NameForm from "./Forms.jsx";
import Calculator from "./LiftingStateUp.jsx";
import ControlledComponent from "./UncontrolledComponents.jsx";
import UncontrolledComponent from "./UncontrolledComponents.jsx";
import RefTest from "./RefsAndTheDOM.jsx";
import TypeCheckingWithProptypes from "./TypeCheckingWithProptypes.jsx";
import MessageList from "./Context.jsx";
import Parent from "./Portals.jsx";


//ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<ComponentsAndProps />, document.getElementById('app'));
//ReactDOM.render(<StateAndLifeCycle />, document.getElementById('app'));

/*
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('app')
    );
}

setInterval(tick, 1000);
*/

//ReactDOM.render(<HandlingEvents/>, document.getElementById('app'));

//ReactDOM.render(<ConditionalRendering/>, document.getElementById('app'));

//ReactDOM.render(<ListAndKeys/>, document.getElementById('app'));

//ReactDOM.render(<NameForm/>, document.getElementById('app'));

//ReactDOM.render(<Calculator/>, document.getElementById('app'));

//ReactDOM.render(<ControlledComponent/>, document.getElementById('app'));

//ReactDOM.render(<UncontrolledComponent/>, document.getElementById('app'));

//ReactDOM.render(<RefTest/>, document.getElementById('app'));

//ReactDOM.render(<TypeCheckingWithProptypes/>, document.getElementById('app'));


/*
ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('app')
);
*/

//ReactDOM.render(<MessageList/>, document.getElementById('app'));


ReactDOM.render(<Parent />, document.getElementById('app-root'));

