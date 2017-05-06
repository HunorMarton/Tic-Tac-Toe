import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/boardActions';
import * as players from '../constants/players';
import Circle from '../components/Circle';
import Cross from '../components/Cross';
import Noone from '../components/Noone';

class Block extends React.Component {
  getPlayer() {
    switch (this.props.board[this.props.id]) {
      case players.CIRCLE:
        return <Circle/>;
      case players.CROSS:
        return <Cross/>;
      default:
        return <Noone id={this.props.id} currentPlayer={this.props.currentPlayer} set={this.props.actions.set}/>;
    }
  }

  render() {
    const x = this.props.id[2]; // This is not scalable
    const y = this.props.id[1];
    let player = this.getPlayer();

    return (
      <g className="block" transform={`translate(${100*(x-1)},${100*(y-1)})`}>
        {player}
      </g>
    );
  }
}

Block.propTypes = {
  id: PropTypes.string.isRequired,
  board: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  currentPlayer: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    board: state.board,
    currentPlayer: state.game.currentPlayer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);
