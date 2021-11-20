// eslint-disable-next-line
import { CSSProperties, FC, useEffect, useState } from 'react' 
import { Square } from './Square'
import { Knight } from './Knight'


/** Styling properties applied to the board element */
const boardStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
}

/** Styling properties applied to each square element */
const squareStyle: CSSProperties = { width: '12.5%', height: '12.5%' }

export interface BoardProps {
  knightPosition: Array<number>;
}

const renderSquare = (i: number, [knightX, knightY]: Array<number>) => {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  // console.log(` ${x} ${y} ${black} ${isKnightHere} `);

  return (
    <div key={i} style={squareStyle}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

export const Board: FC<BoardProps> = ({ knightPosition }) => {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <div style={boardStyle}>
      {squares}
    </div>
  )
}