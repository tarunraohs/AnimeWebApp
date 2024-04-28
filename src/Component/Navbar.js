import React from 'react'
import logoImage from '../Source/Logo.jpg';
import "../Style/Style.css"
import { FaSearch } from 'react-icons/fa' 
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <header className="site-header">
                <div className="logo-container">
                    <a href="/" className="logo">
                        <img src={logoImage} alt="YourAnime Logo" className='logo-img ' />
                    </a>  
                    <div className='search-2'>
                    <Link to='/search'> <FaSearch size={40} /> </Link>
                    </div>
                    
                </div>
                <nav className="desktop-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                    <div className="user-actions">
                        <Link to='/search'> <FaSearch /> </Link>
                        {/* <a href="/">Watchlist</a>
                        <a href="/">Favorites</a> */}
                    </div>
                </nav>
            </header> 
            <div>
                   <nav className='nav-2'>
                    <div className="user-actions">
                        <a href="/">Watchlist</a>
                        <a href="/">Favorites</a>
                    </div>
                </nav> 
                </div>

        </div>
    )
}
