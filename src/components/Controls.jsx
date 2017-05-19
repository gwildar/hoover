import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';

import styles from '../styles/Controls.css';

const Controls = (props) => {
  return (
    <div className={styles.controls}>
      <Button
        className={styles.left}
        onClick={e => props.moveHoover(-1, 0)}
        >
        Move Left
      </Button>
      <Button
        className={styles.right}
        onClick={e => props.moveHoover(1, 0)}>
        Move Right
      </Button>
      <Button
        className={styles.up}
        onClick={e => props.moveHoover(0, 1)}
      >
        Move Up
      </Button>
      <Button
        className={styles.down}
        onClick={e => props.moveHoover(0, -1)}>
        Move Down
      </Button>
    </div>
  )
};

Controls.propTypes = {
  moveHoover: PropTypes.func.isRequired,
};

export default Controls;
