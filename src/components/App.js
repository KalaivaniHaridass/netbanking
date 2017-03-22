import React, { Component } from 'react'


import * as actions from '../actions';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';


class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="container">
                <h1>WELCOME TO NET BANKING!!!</h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        state: state


    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)