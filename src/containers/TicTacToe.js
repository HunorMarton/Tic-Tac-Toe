import React from 'react';
import PropTypes from 'prop-types';
import {connect, Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/boardActions';
import Board from '../components/Board';

class TicTacToe extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }


  render() {
    return (
      <Provider store={this.props.store}>
        <div id="container">
          <Board board={this.props.board}/>
        </div>
      </Provider>
    );
  }
}

TicTacToe.propTypes = {
  store: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    board: state.board
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
)(TicTacToe);
