import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { addSongRow, songs } from './reducers';
import { connect, Provider } from 'react-redux';
import { loadSongs } from './actions';

const store = createStore(
  combineReducers({songs, addSongRow}),
  applyMiddleware(thunk, createLogger())
);


const mapStateToProps = (state) => state;

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = (dispatch) => ({
    loadSongs: () => dispatch(loadSongs())
});

const LiveApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
      <LiveApp/>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(loadSongs());
