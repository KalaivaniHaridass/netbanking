import React, { Component } from 'react'
import {browserHistory} from 'react-router';

class Mydetails extends Component {
    constructor(props){
        super(props);
    }
    Edit(){
        browserHistory.push('/edit');
    }
    finish(){
        browserHistory.push('/mysite');
    }
    render () {
        var element=null;
        if(this.props.state.moredetails.length!=0){
            element=<div>
                <p>Mobile Number : {this.props.state.moredetails.mobno}</p>
            <p>Email : {this.props.state.moredetails.email}</p>
            <button className="btn btn-success" onClick={()=>this.finish()}>FINISH EDITING</button>
            </div>
        }
        return (
            <div className="well">
            <h3>ACCOUNT HOLDER NAME : {this.props.state.username}</h3>
            {element}
            <button className="btn btn-danger" onClick={()=>this.Edit()}>Add more </button>
            </div>
        )
    }
}

export default Mydetails