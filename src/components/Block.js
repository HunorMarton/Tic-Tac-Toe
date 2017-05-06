import React, {PropTypes} from 'react';
import * as players from '../constants/players';
import Circle from '../components/Circle';
import Cross from '../components/Cross';

const Block = ({id,playerId}) => {
  const x = id[1]; // This is not scaleable
  const y = id[2];
  let player;
  switch (playerId) {
    case players.CIRCLE:
      player = <Circle />;
      break;
    case players.CROSS:
      player = <Cross />;
      break;
    default:
      player = <g />;
  }
  return (
    <g className="block" transform={`translate(${100*(x-1)},${100*(y-1)})`}>
      {player}
    </g>
  );
};

Block.propTypes = {
  id: PropTypes.string.isRequired,
  playerId: PropTypes.string.isRequired
};

export default Block;
