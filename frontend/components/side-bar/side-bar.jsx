
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Link, withRouter } from 'react-router';
import values from 'lodash/values';

import GroupLinkContainer from './group-link-container';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

class SideBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grouping: -1,
      shouldShowDust: false,
      shouldShowHelpText: false
    };
    this.renderCenter = this.renderCenter.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.filterBy = this.filterBy.bind(this);
    this.showDust = this.showDust.bind(this);
    this.filter = this.filter.bind(this);
    this.textInsideFilterButton = this.textInsideFilterButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserGroups();
  }

  // groupLinks() {
  //   // this.props.groups.forEach( (group) => {
  //   //   this.groupLink(group.title, group.id);
  //   // });
  //   this.props.groups.map( (group) => {
  //     this.groupLink(group.title, group.id);
  //   });
  // }

  groupLink(groupName, groupId) {
    return (
      <GroupLinkContainer key={groupId} groupName={groupName} groupId={groupId} />
    );
    // <li key={groupId + groupName}>
    //   <Link to={`/dashboard/groups/${groupId}`}>
    //     <FlatButton
    //       className="sidebar-button"
    //       >
    //       {groupName}
    //     </FlatButton>
    //   </Link>
    //   <button onClick={this.handleDestroy(groupId)}>----</button>
    // </li>
  }


  renderCenter() {
    return this.props.children;
  }

  showDust() {
    if (this.props.location.pathname === "/dashboard/") {
      return <img src="https://i.imgur.com/EhwDa8N.png" className="dust"></img>;
    } else {
      return <div className="dust"></div>;
    }
  }


  filterBy(housemateId) {
    return e => {
      this.props.filterUser(housemateId);
    };
  }

  filter(housemateId) {
    if (housemateId === this.props.filter) {
      return "filtered user";
    } else {
      return "user";
    }
  }

  avatar(username) {
      let peanuts = {lucy: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/lucy_gx7jfn.png",
        marcie: "http://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/marcie_ehcbyu.png",
        patty: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/peppermint-patty_tyubwk.png",
        pigpen: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016809/pigpen_e2bftl.png",
        sally: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016805/sally_jjx4w7.png",
        schroeder: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016805/schroeder_xqvydo.png",
        snoopy: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016805/snoopy_pxac26.png",
        charlie: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/charlie-brown_owvwz0.png",
        linus: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/linus_g5lfo2.png",
        woodstock: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016798/woodstock_ukk03o.png",
        franklin: "https://res.cloudinary.com/dn4angt2n/image/upload/v1479016807/franklin_kl3qke.png"
      };
      if (peanuts[username.toLowerCase()]) {
        return <img className="peanuts-user-icon" src={peanuts[username.toLowerCase()]}></img>;
      } else {
        return <i className="fa fa-user user-icon" aria-hidden="true"></i>;
      }
  }

  housemate(housemate) {
    if (this.props.location.pathname === '/dashboard/' || this.props.location.pathname === '/dashboard'){
      return <div key={housemate.id}></div>;
    } else if (this.props.location.pathname.includes('groups/')){
      return <ListItem key={housemate.id}
                       leftIcon={this.avatar(housemate.username)}
                       className={this.filter(housemate.id)}
                       primaryText={housemate.username}
                       onTouchTap={this.filterBy(housemate.id)}/>;
    }
  }



  handleTouch(route) {
    return e => {
      this.props.router.push(route);
    };
  }

  textInsideFilterButton() {
    if (this.state.shouldShowHelpText && this.props.filter === 0) {
      return "Click Name to Filter";
    }

    if (this.props.filter === 0 ) {
      return "Filter by Housemate";
    } else {
      return "Unfilter by Housemate";
    }
  }
  render() {
    let housemates = values(this.props.housemates);

    if (this.props.loggedIn) {
      return (
      <div
        className="center-container"
        >
        <div
          className="sidebar"
          >
          <List>
             <ListItem className="sidebar-link" leftIcon={this.showDust()} primaryText="myChores" onTouchTap={this.handleTouch('/dashboard/')}/>
             <div className='groups'>
               <Subheader>yourGroups</Subheader>
               <Link to="/create_group"
                className="group-create-link"
                 >
                 add+
               </Link>
             </div>
             <Divider />
             {this.props.groups.slice(0,8).map( (group) => {
               return this.groupLink(group.title, group.id);
             })}
           </List>
        </div>
        {this.renderCenter()}
        <div className="right-sidebar">
          <List>
            {this.props.location.pathname === '/dashboard/' ||
              this.props.location.pathname === '/dashboard'
              ? <div></div>
              : <ListItem className={this.props.filter === 0
               ? "filter-text"
               : "filtered-text"}
               primaryText={this.textInsideFilterButton()}
               onMouseEnter={()=> this.setState({["shouldShowHelpText"]: true})}
               onMouseLeave={()=> this.setState({["shouldShowHelpText"]: false})}
               onTouchTap={this.filterBy(0)}></ListItem>}
            {housemates.map((housemate) => {
              return this.housemate(housemate);
            })}
          </List>
        </div>
      </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default SideBar;
