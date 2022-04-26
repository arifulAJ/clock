import React, { Component } from 'react'
import "./Watch.css"
export default class Watch extends Component {
    state={ date:new Date()};
    componentDidMount(){
        setInterval(() => {
            this.setState({date:new Date()})
        }, 1000);
    }
  render() {
    return (
      <div>
          <h4 className='clock'>Watch Bangla - {this.state.date.toLocaleTimeString(this.props.local)}</h4>
          <h4 className='clock'>Watch English - {this.state.date.toLocaleTimeString(this.props.locals)}</h4>
      </div>
    )
  }
}
