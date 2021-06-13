import React from 'react'
import './Navbar.css'
import {NavLink, useHistory} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

function Navbar() {
    let history = useHistory()
    const pushHome = ()=>{
    history.push('/')
    }
    return (
        <div className='navbar'>
           <div className="navbar__logo" onClick={pushHome}>
               <img src="https://static.thenounproject.com/png/1051662-200.png" alt="logo" />
               <h5>Traversa</h5>
           </div>
           <div className="navbar__links">
              <NavLink exact activeClassName='nav_active' to='/'> <li>Home <HomeIcon className='navIcons'/></li></NavLink>
              <NavLink exact activeClassName='nav_active' to='/AddTrips'> <li>Plan Trips <AddLocationIcon className='navIcons'/></li></NavLink>
              <NavLink exact activeClassName='nav_active' to='/ShowTrips'> <li>My Trips <CollectionsBookmarkIcon className='navIcons'/></li></NavLink>
           </div>
        </div>
    )
}

export default Navbar
