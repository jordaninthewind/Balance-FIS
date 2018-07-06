import React from 'react';
import { NavLink } from 'react-router-dom'; 

const NavBar = () => {
  return (
  <Switch>
     <Link to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
     <Link to="/meditation_sessions" exact style={link} activeStyle={{ background: 'darkblue' }}>Actors</NavLink>
  </Switch>
  );
};

export default NavBar;
