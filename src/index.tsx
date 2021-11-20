import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Board } from './Board'

ReactDOM.render(
  <Board knightPosition={[3, 2]} />
  , document.getElementById('root')
)