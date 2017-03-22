import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Chat extends Component {
    constructor(props) {
        super(props);
    }
    send() {
        browserHistory.push('/reply');
    }

    render() {
        return (
            <div className="well">
                <div>Hi {this.props.state.username},</div>
                <div>Welcome to Online Chatting</div>
                <input type="textbox" placeholder="Type your querry here....." />
                <button className="btn-success" onClick={() => this.send()}>send</button>
            </div>
        )
    }
}

export default Chat