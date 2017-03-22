import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

class Mysite extends Component {
    constructor(props) {
        super(props);
    }
    Details() {
        browserHistory.push('/mydetails');
    }
    Aboutus() {
        browserHistory.push('/aboutus');
    }
    Contact() {
        browserHistory.push('/contactus');
    }
    Transfer() {
        browserHistory.push('/maketransfer');
    }
    Transhistory() {
        browserHistory.push('/transferredhistory');
    }
    Logout() {
        browserHistory.push('/');
        this.props.actions.logout();  
    }
    render() {

        let use = this.props.state.username;

        return (
            <div className="well">
                <div className="pop">
                    <div className="row">
                         <h2 className="tit col-xs-6">Hi {use},</h2>
                        <span id="log1" className="col-xs-3 col-xs-offset-3" onClick={() => this.Logout()}><Link to="/" >Logout</Link></span>
                    </div>                   
                    <ul>
                    {/*<li id="log1" onClick={() => this.Logout()}><Link to="/" >Logout</Link></li>*/}
                    <li onClick={() => this.Details()}><Link to="/mydetails">MY DETAILS</Link></li>
                    <li onClick={() => this.Aboutus()}><Link to="/aboutus">ABOUT US</Link></li>
                    <li onClick={() => this.Contact()}><Link to="/contactus">CONTACT US</Link></li>
                    <li onClick={() => this.Transfer()}><Link to="/maketransfer">MAKE A TRANSFER</Link></li>
                    <li onClick={() => this.Transhistory()}><Link to="/transferredhistory">TRANSFERRED HISTORY</Link></li>
                    </ul>

                </div>
            </div>
        )
    }
}


export default Mysite