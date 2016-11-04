import { connect } from 'react-redux';
import CreateGroup from './create-group';
import { createAGroup } from '../../actions/group_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createAGroup: group => dispatch(createAGroup(group))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGroup);
