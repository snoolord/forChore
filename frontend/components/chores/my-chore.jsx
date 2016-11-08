import React from 'react';
import {List, ListItem} from 'material-ui/List';

class MyChore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="group-show">
        <div className="group-show-center">
          <h2>
            YourChores! forChore!
          </h2>
        <List>
          {this.props.chores.map((chore) => {
            return <ListItem key={chore.id}primaryText={chore.task}></ListItem>;
          })}
        </List>

        </div>
      </div>
    );
  }
}

export default MyChore;
