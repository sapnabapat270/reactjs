import React from 'react';

class App extends React.Component {
    render() {
        return (
            <p>
                Hello World Paragraph!!!
            </p>
        );
    }
}



/*

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
            </div>
        );
    }
}

*/

/*class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{1+1}</h1>
            </div>
        );
    }
}*/

/*
class App extends React.Component {
    render() {
        var i = 1;
        return (
            <div>
                <h1>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
        );
    }
}
*/

/*
class App extends React.Component {
    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <h1 style = {myStyle}>Header</h1>
            </div>
        );
    }
}
*/


/*
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Big header and comments</h1>
            </div>
        );
    }
}*/
export default App;
