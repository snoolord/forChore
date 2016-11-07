import React from 'react';
import FlatButton from 'material-ui/';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="group-show">
        <div className="group-show-center">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default GroupShow;
