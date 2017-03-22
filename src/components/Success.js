import React, { Component } from 'react'
import{browserHistory} from 'react-router'

class Success extends Component {
    constructor(props){
        super(props);
    }
    Transagain(){
        browserHistory.push('/maketransfer');
    }
    Home(){
        browserHistory.push('/mysite');
    }
    render () {
        return (
            <div className="well">
                <h2 className="tit">Hi {this.props.state.username},</h2>
                YOU HAVE SUCCESSFULLY TRANSFERRED!!!
                <button className="btn-success" onClick={()=>this.Transagain()}>Transfer Again</button>
                <button className="btn-success" onClick={()=>this.Home()}>Back to Home</button>
            </div>
        )
    }
}

export default Success