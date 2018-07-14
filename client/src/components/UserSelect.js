import React from 'react';

const UserSelect = props => {
    const userSelection = props.users.map(user => {
      return <option key={user.id} value={user.id}>{user.name}</option>
    })

    return (
        <select value={props.currentUser ? props.currentUser.id : 0} onChange={(e) => props.userChange(e)} >
          <option disabled value={0}>Select a User</option>
          {userSelection}
        </select>
    );
  }

export default UserSelect;