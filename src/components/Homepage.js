import React, { Component } from 'react'
import { browserHistory } from 'react-router';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    Login() {
        if (this.refs.username.value.length != 0) {
            this.props.actions.Login(this.refs.username.value);
            browserHistory.push('/mysite');
        }

    }
    render() {
        return (
            <div className="well">

                <div>
                    <input className="form-control form-control-lg" ref="username" type="text" placeholder="Username" />

                </div>
                <button className="btn btn-primary" id="log" onClick={() => this.Login()}>LOGIN</button>

            </div>
        )
    }
}


export default Homepage