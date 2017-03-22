import React, { Component } from 'react'
import {browserHistory} from 'react-router'

class Aboutus extends Component {
    constructor(props){
        super(props);
        this.state={
            jsonData:""

        }
    }
     home(){
        browserHistory.push('/mysite')
    }
      componentWillMount(){
         fetch("./data.json")
                        .then(response => response.json())
                        .then(json => {
                        this.setState({
                         jsonData: json
                        });
                    });
                   
 
    }
     
    
    render () {
        let data=this.state.jsonData;
        let k=Object.keys(data);
        
        
      console.log(k);
       let j= k.map((k, i) => {
            console.log(data[k])
            return <div key={i}>{k} :{data[k]}</div>;
        
        })
      
        return (
            <div className="well">
                <div>
               {j}
               </div>
               <button id="" className="btn-success" onClick={()=>this.home()}>Home</button>
            </div>
        )
    
    }
}

export default Aboutus