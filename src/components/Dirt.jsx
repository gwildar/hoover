import React from 'react';
import PropTypes from 'prop-types';

import { SQUARE_SIZE } from '../const';
import styles from '../styles/Dirt.css';

const Dirt = (props) => {
  const sizePos = {
    left: `${(props.x -1) * SQUARE_SIZE }px`,
    bottom: `${(props.y -1) * SQUARE_SIZE }px`,
    width: `${ SQUARE_SIZE }px`,
    height: `${ SQUARE_SIZE }px`,
  }
  return (
    <div style={sizePos} className={styles.dirt} />
  )
};

Dirt.defaultProps = {
  x: 0,
  y: 0,
}

Dirt.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Dirt;
