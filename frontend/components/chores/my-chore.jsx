import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ChoreContainer from './chore-container';


class MyChore extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    let currentChores = [];
    let completedChores = [];
    if (this.props.currentChores) {
      currentChores = this.props.currentChores;
    }
    if (this.props.completedChores) {
      completedChores = this.props.completedChores;
    }
    return(
      <div className="group-show">
        <div className="group-show-center">
          <h2>
            YourChores! forChore!
          </h2>
        <List>
          Current Chores
          {currentChores.map((chore) => {
            return <ChoreContainer key={chore.id} chore={chore} comments={chore.comments} dashboard={true}/>;
          })}
        </List>
          <List>
          Completed Chores
          {completedChores.map((chore) => {
            return <ChoreContainer key={chore.id} chore={chore} comments={chore.comments} dashboard={true}/>;
          })}
        </List>
        </div>
      </div>
    );
  }
}

export default MyChore;
