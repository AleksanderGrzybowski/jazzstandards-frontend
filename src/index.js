import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { songs, view } from './reducers';
import { connect, Provider } from 'react-redux';
import { togglePractice, addSong, loadSongs, setSongFormVisible } from './actions';

const store = createStore(
  combineReducers({songs, view}),
  applyMiddleware(thunk, createLogger())
);


const mapStateToProps = (state) => state;

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = (dispatch) => ({
    loadSongs: () => dispatch(loadSongs()),
    addSong: (title, url) => dispatch(addSong(title, url)),
    setSongFormVisible: (visible) => dispatch(setSongFormVisible(visible)),
    togglePractice: (songId) => dispatch(togglePractice(songId))
});

const LiveApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
      <LiveApp/>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(loadSongs());
