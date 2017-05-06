import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/boardActions';
import * as players from '../constants/players';

class End extends React.Component {
  reset(e) {
    e.preventDefault();
    this.props.actions.reset();
  }
  render() {
    const winner = this.props.winner === players.CROSS ? 'You win!' : this.props.winner === players.CIRCLE ? 'Computer wins!' : "It's a draw";
    return (
      <div className="end" style={{display: this.props.gameOver ? 'block' : 'none'}}>
        <h1>{winner}</h1>
        <a onClick={this.reset.bind(this)}>Reset</a>
      </div>
    );
  }
}

End.propTypes = {
  actions: PropTypes.object.isRequired,
  gameOver: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    gameOver: state.game.gameOver,
    winner: state.game.winner
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
)(End);
