import React, { Component } from 'react'
import { browserHistory } from "react-router"

class Edit extends Component {
    constructor(props) {
        super(props);

    }
    Addmore() {
        if ((this.refs.mobno.value.length == 10) && (this.refs.email.value.length != 0)) {
            this.props.actions.Addmore(this.refs.mobno.value, this.refs.email.value);
            browserHistory.push("/mydetails")
        }
    }

    render() {

        return (
            <div className="well">
                <div className="editList">
                    <div>
                        <label>MOB NO :
                <input type="textbox" ref="mobno" />
                        </label>
                    </div>
                    <div>
                        <label>EMAIL :
                            <input type="textbox" ref="email" />
                        </label>
                    </div>
                    <button className="btn btn-success" onClick={() => this.Addmore()}>Add to My Details</button>
                </div>
            </div>
        )
    }
}

export default Edit