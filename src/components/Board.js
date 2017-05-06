import React, {PropTypes}  from 'react';
import Block from './Block';

const Board = ({board}) => (
    <div id="container">
      <svg width="500" height="500" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <Block id="b11" player={board.b11} />
        <Block id="b12" player={board.b12} />
        <Block id="b13" player={board.b13} />
        <Block id="b21" player={board.b21} />
        <Block id="b22" player={board.b22} />
        <Block id="b23" player={board.b23} />
        <Block id="b31" player={board.b31} />
        <Block id="b32" player={board.b32} />
        <Block id="b33" player={board.b33} />
      </svg>
    </div>
);

Board.propTypes = {
  board: PropTypes.object.isRequired
};

export default Board;
