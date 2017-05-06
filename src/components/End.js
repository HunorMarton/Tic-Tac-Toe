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
    return (
      <div className="end">
        <h1>Winner is {this.props.winner}</h1>
        <a onClick={this.reset.bind(this)}>Reset</a>
      </div>
    );
  }
}

End.propTypes = {
  actions: PropTypes.object.isRequired,
  winner: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
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
