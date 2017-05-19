import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-toolbox/lib/drawer';
import Button from 'react-toolbox/lib/button';

import FormContainer from '../containers/FormContainer';
import styles from '../styles/Settings.css';

const Settings = (props) => {
  return (
    <Drawer
      active={props.active}
      onOverlayClick={props.handleToggle}
      className={styles.settings}
    >
      <Button
        icon='close'
        floating
        mini
        onClick={props.handleToggle}
        className={styles.close}
      />
      <h3 className={styles.header}>Settings</h3>
      <FormContainer />
    </Drawer>
  )
};

Settings.propTypes = {
  active: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Settings;
