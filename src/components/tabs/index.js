import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./style/index.scss"
class Tabs extends React.Component {
  constructor () {
    super();
    this.state = {
      current: 0
    }
  }

  handleClick (evt, index) {
    // console.log(index);
    this.setState({
      current: index
    })
  }

  render () {
    return (
      <div className="tabs">
        {
          this.props.tabs.map((tab, index)=>(
            <div className={`tab ${index===this.state.current ? "current" : ""}`} onClick={e=>this.handleClick(e, index)} key={index}>{tab}</div>
          ))
        }
      </div>
    )
  }
}


export default Tabs;