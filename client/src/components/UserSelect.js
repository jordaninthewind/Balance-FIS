import React from 'react';

const UserSelect = props => {
    const userSelection = props.users.map(user => {
      return <option key={user.id} value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={(e) => props.userChange(e)} >
          <option disabled selected value>Select a User</option>
          {userSelection}
        </select>
    );
  }

export default UserSelect;