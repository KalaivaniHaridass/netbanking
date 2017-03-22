import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Maketransfer extends Component {
    constructor(props) {
        super(props);
    }
    Transfer() {
        if ((this.refs.acno.value.length == 10) && (this.refs.acno.value.length != 0)) {
            this.props.actions.Transfer(this.refs.acno.value, this.refs.amt.value);
            browserHistory.push('/success');
        }
    }
    back() {
        browserHistory.push('/mysite');
    }

    render() {
        return (
            <div className="well">
                <div>
                    <h2 className="tit">Hi {this.props.state.username},</h2>
                    <div>
                        <label> AC Number :
                    <input type="textbox" ref="acno" />
                        </label>
                    </div>
                    <div>
                        <label>Amount :
                    <input type="textbox" placeholder=" Rs. " ref="amt" />
                        </label>
                    </div>
                    <button className="btn-success" id="trans" onClick={() => this.Transfer()}>Transfer</button>
                    <button className="btn-success" onClick={() => this.back()}>Back</button>
                </div>

            </div>
        )
    }
}

export default Maketransfer