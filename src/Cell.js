import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    handleClick = () => {
        this.setState({
          color: '#333'
        })
    }
  
  render() {
    return (
        <div 
            class="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}>

        </div>
    )
      
  }
  
}
