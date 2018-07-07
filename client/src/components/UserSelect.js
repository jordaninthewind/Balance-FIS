// import { DropdownButton, MenuItem } from 'react-bootstrap';
import React from 'react';

const Users = [{id: 0, name: 'Paul'}, {id: 1, name: "Gerald"}, {id: 2, name: "Bafoo"}]

const userSelection = Users.map(user => {
  return <a href="#">{user.name}</a>
})


const UserSelect = () => {
  return (
  <div>
    {userSelection}
  </div>
  );
}

export default UserSelect;