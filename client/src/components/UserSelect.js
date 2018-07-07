// import { DropdownButton, MenuItem } from 'react-bootstrap';
import React from 'react';

const Users = [{id: 0, name: 'Paul'}, {id: 1, name: "Gerald"}, {id: 2, name: "Bafoo"}, {id: 3, name: "Wilmer"}]

const userSelection = Users.map(user => {
  return <p><a href={'/users/' + user.id}>{user.name}</a></p>
})


const UserSelect = () => {
  return (
  <div>
    {userSelection}
  </div>
  );
}

export default UserSelect;