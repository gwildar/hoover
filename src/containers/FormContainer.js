import { connect } from 'react-redux';

import SettingsForm from '../components/SettingsForm';
import { formSubmission, changeSpots } from '../actions/actions';

const mapStateToProps = state => {
  return {
      dirt: state.form.game.dirt,
      board: state.form.game.board,
      hoover: state.form.hoover,
  }
};

const FormContainer = connect(
  mapStateToProps,
  {
    formSubmission,
    changeSpots
  }
)(SettingsForm);

export default FormContainer;
