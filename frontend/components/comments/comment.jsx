import React from 'react';


class Comment extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    return <div>Hello!</div>;
  }
}

export default Comment;
