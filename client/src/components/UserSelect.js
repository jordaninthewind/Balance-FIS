import React, { Component } from 'react';

class UserSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelection: null,
    }

  }

  handleChange = (e) => {
    this.setState({
      userSelection: e.target.value,
    })
  }


  render() {

    const Users = [
      {id: 0, name: "Jordan"}, 
      {id: 1, name: "Anna"}, 
      {id: 2, name: "Diego"}, 
      {id: 3, name: "Homer"}, 
      {id: 4, name: "Magellan"}
      ];

    const userSelection = Users.map(user => {
      return <option value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={this.handleChange}>
          {userSelection}
        </select>
      );
    }
}

export default UserSelect;