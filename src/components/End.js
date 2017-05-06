import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/boardActions';
import * as players from '../constants/players';

class End extends React.Component {
  render() {
    return (
      <div className="end">
        Winner is {this.props.winner}
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
