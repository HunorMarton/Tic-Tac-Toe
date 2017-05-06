import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Board from '../components/Board';
import End from '../components/End';

class TicTacToe extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div id="container">
          <Board/>
          <End/>
        </div>
      </Provider>
    );
  }
}

TicTacToe.propTypes = {
  store: PropTypes.object.isRequired,
  winner: PropTypes.string.isRequired
};

export default TicTacToe;
