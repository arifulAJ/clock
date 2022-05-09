import React, { Component } from 'react'

export default class Button extends Component {
    shouldComponentUpdate(nestProps){
        const{change:currentChange}=this.props;
        const {change:nextChange}=nestProps;
        if(currentChange===nextChange){
            return false;
        }
        else{
            return true;
        }

    }
  render() {
      console.log("button component render");
      const {change,local}=this.props
    return (

      <div>
          <button onClick={()=>change(local)}>change the clock language </button>
        
      </div>
    )
  }
}
