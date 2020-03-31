import React, { Component } from 'react';
import Cell from './cell.js';

export default class Matrix extends Component {
  constructor(){
    super()

    this.state = {
      
    }
  }
  
  genRow = (vals) => {
    return vals.map((val,idx) => <Cell value={val}  key={idx}/>
)
    // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals,idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    console.log(this.props.values)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}