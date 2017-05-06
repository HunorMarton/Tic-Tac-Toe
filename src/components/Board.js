import React, {PropTypes}  from 'react';
import Block from './Block';

const Board = ({board}) => (
    <div id="container">
      <svg width="500" height="500" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <line className="stripe" x1={0} y1={100} x2={300} y2={100} />
        <line className="stripe" x1={0} y1={200} x2={300} y2={200} />
        <line className="stripe" x1={100} y1={0} x2={100} y2={300} />
        <line className="stripe" x1={200} y1={0} x2={200} y2={300} />
        <Block id="b11" playerId={board.b11} />
        <Block id="b12" playerId={board.b12} />
        <Block id="b13" playerId={board.b13} />
        <Block id="b21" playerId={board.b21} />
        <Block id="b22" playerId={board.b22} />
        <Block id="b23" playerId={board.b23} />
        <Block id="b31" playerId={board.b31} />
        <Block id="b32" playerId={board.b32} />
        <Block id="b33" playerId={board.b33} />
      </svg>
    </div>
);

Board.propTypes = {
  board: PropTypes.object.isRequired
};

export default Board;
