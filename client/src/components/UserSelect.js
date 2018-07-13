import React from 'react';

const UserSelect = props => {
    // debugger;
    const userSelection = props.users.map(user => {
      return <option key={user.id} value={user.id}>{user.name}</option>
    })

    return (
        <select value={props.currentUser ? props.currentUser.id : null} onChange={(e) => props.userChange(e)} >
          <option disabled selected value>Select a User</option>
          {userSelection}
        </select>
    );
  }

export default UserSelect;