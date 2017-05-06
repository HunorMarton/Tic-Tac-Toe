import React  from 'react';
import Block from './Block';

const Board = () => (
    <div>
      <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <line className="stripe" x1={0} y1={100} x2={300} y2={100} />
        <line className="stripe" x1={0} y1={200} x2={300} y2={200} />
        <line className="stripe" x1={100} y1={0} x2={100} y2={300} />
        <line className="stripe" x1={200} y1={0} x2={200} y2={300} />
        <Block id="b11" />
        <Block id="b12" />
        <Block id="b13" />
        <Block id="b21" />
        <Block id="b22" />
        <Block id="b23" />
        <Block id="b31" />
        <Block id="b32" />
        <Block id="b33" />
      </svg>
    </div>
);

export default Board;
