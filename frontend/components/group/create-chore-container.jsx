import { connect } from 'react-redux';
import CreateChore from './create-chore';
import { createChore } from '../../actions/chore_actions.js';

const mapStateToProps = (state) => {
  return {
    housemates: state.group.housemates,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChore: (chore) => dispatch(createChore(chore))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChore);
