import React from 'react'
import '../styles/Header.css'


import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/'><h2>FakeShop</h2></Link>
            </div>
            <div className='icons'>
                <Link to='instagram.com'> <span><AiOutlineInstagram /></span></Link>
                <Link to='facebook.com'> <span><AiOutlineFacebook /></span></Link>
            </div>
        </div>
    )
}

export default Header
