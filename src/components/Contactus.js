import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import { Link } from 'react-router'

class Contactus extends Component {
    constructor(props){
        super(props);
}
home()
{
    browserHistory.push('/mysite');
}

    render () {
        return (
            <div className="well">
                <h2 className="tit">Hi {this.props.state.username},</h2>
               <div>
                   <label>contact us:
                       <span>7094911484</span>
                       </label>
                   </div>
                   <div>
                <a href="https://accounts.google.com"> Click here to Mail us</a>
                </div>
                <div>
               <Link to="/chat"> Click here to Chat</Link>
                </div>
                <button className="btn-success" onClick={()=>this.home()}>Home</button>
            </div>
        )
    }
}

export default Contactus