import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Board from '../components/Board';

class TicTacToe extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div id="container">
          <Board/>
        </div>
      </Provider>
    );
  }
}

TicTacToe.propTypes = {
  store: PropTypes.object.isRequired,
};

export default TicTacToe;
