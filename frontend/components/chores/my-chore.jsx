import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ChoreContainer from './chore-container';
import Divider from 'material-ui/Divider';

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
          <h2 className="my-chore-header">
            {this.props.currentUser + "'s "}chores
          </h2>
          <List>
            <div className="group-columns">
              <div>
                Current Chores
              </div>
              <div className="status">
                Status
              </div>
            </div>
            <Divider/>
            {currentChores.map((chore) => {
              return <ChoreContainer key={chore.id} chore={chore} comments={chore.comments} dashboard={true}/>;
            })}
          </List>
          <List>
            <div className="group-columns">
              <div>
                Completed Chores
              </div>
              <div className="status">
                Status
              </div>
            </div>
            <Divider/>

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
