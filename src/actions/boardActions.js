import * as types from '../constants/actionTypes';

export function set(player, block) {
  return {
    type: types.SET,
    player,
    block
  };
}

export function reset() {
  return {
    type: types.RESET
  };
}
