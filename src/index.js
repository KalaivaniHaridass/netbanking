import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Mysite from './components/Mysite'
import Mydetails from './components/Mydetails'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Maketransfer from './components/Maketransfer'
import Transferrredhistory from './components/Transferredhistory'
import Success from './components/Success'
import Chat from './components/chat'
import Reply from './components/reply'
import Homepage from "./components/Homepage"
import Edit from './components/Edit'
import {Provider} from 'react-redux'
import { Router, Route,browserHistory ,IndexRoute } from 'react-router';
import store from './store';
import './css/style.css'

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
            <Route path="/mysite" component={Mysite}/>
            <Route path="/mydetails" component={Mydetails}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/contactus" component={Contactus}/>
            <Route path="/maketransfer" component={Maketransfer}/>
            <Route path="/transferredhistory" component={Transferrredhistory}/>
            <Route path="/edit" component={Edit}/>
            <Route path="/success" component={Success}/>
            <Route path="/chat" component={Chat}/>
            <Route path="/reply" component={Reply}/>
            
        
        </Route>
    </Router>
</Provider>,document.getElementById('root'))