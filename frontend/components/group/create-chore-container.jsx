import { connect } from 'react-redux';
import CreateChore from './create-chore';

const mapStateToProps = (state) => {
  console.log(state);
  console.log("mapping state");
  return {
    housemates: state.group.housemates
  };
};

export default connect(
  mapStateToProps,
  null
)(CreateChore);
