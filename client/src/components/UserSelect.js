import React, { Component } from 'react';

class UserSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelection: null,
    }
  }

  handleChange = (e) => {
    debugger;
    this.setState({
      userSelection: e.target.value,
    })
  }


  render() {

    const Users = [
      {id: 0, name: 'Paul'}, 
      {id: 1, name: "Gerald"}, 
      {id: 2, name: "Bafoo"}, 
      {id: 3, name: "Wilmer"}, 
      {id: 4, name: "Magellan"}
      ];

    const userSelection = Users.map(user => {
      return <option value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={(e) => this.handleChange()}>
          {userSelection}
        </select>
      );
    }
}

export default UserSelect;