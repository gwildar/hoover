import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button'

import Controls from '../components/Controls';
import Hoover from '../components/Hoover';
import Settings from '../components/Settings';
import Dirt from '../components/Dirt';

import { SQUARE_SIZE } from '../const';

import 'normalize.css';
import styles from '../styles/App.css';

class App extends Component {
  render() {
    const carpetSize = {
      width: `${this.props.board.width * SQUARE_SIZE }px`,
      height: `${this.props.board.height * SQUARE_SIZE }px`,
    };
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>Hoover Game</h1>
          <Button label="Settings" raised accent onClick={this.props.toggleDrawer} />
        </div>
        <div className={styles.gameContainer}>
          <div className={styles.score}>{this.props.dirt.length} dirt spots left!</div>
          <div className={styles.carpet} style={carpetSize}>
            <Hoover x={this.props.hoover.x} y={this.props.hoover.y} />
            {
              this.props.dirt.map((dirt, i) =>
                <Dirt key={i} x={dirt.x} y={dirt.y} />
              )
            }
          </div>
          <Controls moveHoover={this.props.moveHoover} />
        </div>
        <Settings
          handleToggle={this.props.toggleDrawer}
          active={this.props.drawer}
        />
      </div>
    );
  }
}

export default App;
