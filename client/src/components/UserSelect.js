import React from 'react';
// import { connect } from 'react-redux';

const UserSelect = props => {
    const userSelection = props.users.map(user => {
      return <option value={user.id}>{user.name}</option>
    })

    return (
        <select onChange={props.userChange}>
          {userSelection}
        </select>
    );
  }

UserSelect.defaultProps = {
  users: [{id: 3, name: 'Paul'}],
}

export default UserSelect;