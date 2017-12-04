import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {color: "purple"};
    }

    render() {
        const messages=new Array("Hello","Hi","How are you");

        const children = messages.map((message) =>
            <Message text={message} />
        );
        return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};

export default MessageList;