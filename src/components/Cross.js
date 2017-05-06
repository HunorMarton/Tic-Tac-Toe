import React from 'react';

const Cross = () => (
  <g>
    <line className="player" x1={20} y1={20} x2={80} y2={80} />
    <line className="player" x1={80} y1={20} x2={20} y2={80} />
  </g>
);

export default Cross;
