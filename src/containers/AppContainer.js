import { connect } from 'react-redux';
import { moveHoover, toggleDrawer } from '../actions/actions';

import App from '../components/App';

const mapStateToProps = state => {
  return {
      hoover: state.gameState.hoover,
      drawer: state.drawer,
      dirt: state.gameState.dirt,
      board: state.gameState.board,
  }
};

const AppContainer = connect(
  mapStateToProps,
  {
    moveHoover,
    toggleDrawer,
  })(App);

export default AppContainer;
