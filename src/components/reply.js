import React, { Component } from 'react'
import {browserHistory} from 'react-router' 

class Reply extends Component {
    constructor(props){
        super(props);
    }
    ok(){
        browserHistory.push('/mysite')
    }
    render () {
        return (
            <div className="well">
                Our Customer care officer will contact you!!!!
                <button className="btn-success" onClick={()=>this.ok()}>OK</button>
            </div>
        )
    }
}

export default Reply