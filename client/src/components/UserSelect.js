import React from 'react';

const UserSelect = props => {
    const userSelection = props.users.map(user => {
      return <option value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={(e) => props.userChange(e)} >
          {userSelection}
        </select>
    );
  }

UserSelect.defaultProps = {
  users: [{id: 3, name: 'Paul'}],
}

export default UserSelect;