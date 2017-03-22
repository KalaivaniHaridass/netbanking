import rootReducer from '../reducers'
import {createStore,applyMiddleware} from 'redux'
import logger from "redux-logger"
let initialState={
    username:"",
    moredetails:"",
    transferdetails:[]
    
}

var store=createStore(rootReducer,initialState,applyMiddleware(logger()));

export default store