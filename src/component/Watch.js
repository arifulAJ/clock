import React, { Component } from 'react'
import Button from './Button';
import "./Watch.css";

export default class Watch extends Component {
    state={ date:new Date(),
    local:"bn-BD",
 };
    componentDidMount(){
        this.clockTimer=setInterval(() => {this.tick() }, 1000);
    };
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    };
   
    handelClockEnglish=(local)=>{

this.setState({
  
  local
})}
  
tick(){
    this.setState({date:new Date()})
}
  render() {
    console.log("watch component render");
    const {date , local}=this.state
    return (
      <div>
 
      <h4 className='clock'> {local==="bn-BD"?( "Watch Bangla"):("Watch English")} -- {date.toLocaleTimeString(local)}</h4>
   
          {/* <h4 className='clock'>Watch Bangla - {date.toLocaleTimeString(local)}</h4> */}

         {local==="bn-BD"?( <Button change= {()=>this.handelClockEnglish("en-US")}  > </Button>):(<Button  change={()=>this.handelClockEnglish("bn-BD")}  local> </Button>)}
          
      </div>
    )
  }
}
