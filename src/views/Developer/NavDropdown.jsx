import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { clean } from '../../redux/actions/user'

const Dropdown = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clean());
    }

    return (
        <ul id='dropdown' className='dropdown-content'>
            <li><Link to='/desarrollador#perfil' className='orange-text text-darken-2'>My Profile</Link></li>
            <li className="divider"></li>
            <li><span onClick={handleLogout} className='orange-text text-darken-2'>Logout</span></li>
        </ul>
    )
}

export default Dropdown