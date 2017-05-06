import React, {PropTypes} from 'react';

const Block = ({id,player}) => {
  const x = id[1]; // This is not scaleable
  const y = id[2];
  return (
      <line id={id} player={player} className="block" x1={0} y1={0} x2={100} y2={100} transform={`translate(${100*(x-1)},${100*(y-1)})`} />
  );
};

Block.propTypes = {
  id: PropTypes.string.isRequired,
  player: PropTypes.string.isRequired
};

export default Block;
