import { connect } from 'react-redux';
import CreateChore from './create-chore';
import { createChore } from '../../actions/chore_actions.js';
import { fetchAGroup, receiveErrors } from '../../actions/group_actions';
const mapStateToProps = (state) => {
  return {
    housemates: state.group.housemates,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChore: (chore) => dispatch(createChore(chore)),
    fetchAGroup: (id) => dispatch(fetchAGroup(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChore);
