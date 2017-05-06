import * as types from '../constants/actionTypes';
import * as players from '../constants/players';

export function set(player, block) {
  return function(dispatch) {
    dispatch({
      type: types.SET,
      player: players.CROSS,
      block
    });
    window.setTimeout(() => {
      dispatch({
        type: types.SET,
        player: players.CIRCLE
      });
    }, 500);
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}
