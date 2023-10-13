import { Link } from 'react-router-dom';
import React from 'react';
import './Navigation.css';

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const Navigation = () => (
  <nav>
    <Link to="/" >Home</Link>
    <Link to="/Posts" >Post</Link>
  </nav>
);
export default Navigation;