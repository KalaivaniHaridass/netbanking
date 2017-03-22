import React, { Component } from 'react'
import {browserHistory} from 'react-router'

class Transferredhistory extends Component {
    constructor(props) {
        super(props);
    }
    home(){
        browserHistory.push('/mysite');
    }
    render() {
       
        
        let tab = this.props.state.transferdetails.map((k, i) => {
           return (<tr key={i}>
                <td>{k.acno}</td>
                <td>{k.amt}</td>
            </tr>)
           
        })
        if(this.props.state.transferdetails.length!=0){
            return (
            <div className="well">
                <table>
                    <thead>
                        <tr>
                            <th>ACCOUNT NUMBER</th>
                            <th>AMOUNT TRANSFERRED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tab}
                    </tbody>
                </table>
                <button className="btn-success" id="his" onClick={()=>this.home()}>HOME</button>
            </div>
        )
    }
    else{
        return(<div className="well">
            <div>No History Found</div>
        <button className="btn-success" onClick={()=>this.home()}>Back</button>
        </div>)
    }
    }
}

export default Transferredhistory