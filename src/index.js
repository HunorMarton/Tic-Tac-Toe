/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import TicTacToe from './containers/TicTacToe';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
require('./styles/MoonLight.otf');
import './styles/styles.scss';

const store = configureStore();

// Initial actions...


render(
  <AppContainer>
    <TicTacToe store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/TicTacToe', () => {
    const NewTicTacToe = require('./containers/TicTacToe').default;
    render(
      <AppContainer>
        <NewTicTacToe store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
