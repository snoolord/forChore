import { connect } from 'react-redux';
import CreateChore from './create-chore';

const mapStateToProps = (props) => ({
  props
});

export default connect(
  mapStateToProps,
  null
)(CreateChore);
