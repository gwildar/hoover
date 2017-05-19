import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button'

import Controls from '../components/Controls';
import Hoover from '../components/Hoover';
import Settings from '../components/Settings';
import Dirt from '../components/Dirt';

import { SQUARE_SIZE } from '../const';

import 'normalize.css';
import styles from '../styles/App.css';

const App = ({hoover, drawer, dirt, board, toggleDrawer, moveHoover}) => {
  const carpetSize = {
    width: `${board.width * SQUARE_SIZE }px`,
    height: `${board.height * SQUARE_SIZE }px`,
  };
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>Hoover Game</h1>
        <Button label="Settings" raised accent onClick={toggleDrawer} />
      </div>
      <div className={styles.gameContainer}>
        <div className={styles.score}>{dirt.length} dirt spots left!</div>
        <div className={styles.carpet} style={carpetSize}>
          <Hoover x={hoover.x} y={hoover.y} />
          {
            dirt.map((dirt, i) =>
              <Dirt key={i} x={dirt.x} y={dirt.y} />
            )
          }
        </div>
        <Controls moveHoover={moveHoover} />
      </div>
      <Settings
        handleToggle={toggleDrawer}
        active={drawer}
      />
    </div>
  );
}

App.propTypes = {
  board: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  dirt: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }),
  ).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawer: PropTypes.bool.isRequired,
  moveHoover: PropTypes.func.isRequired,
};

export default App;
