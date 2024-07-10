import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <p className="name">Saketh Yamsani</p>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li><Link to="/register" className="nav-link">Register</Link></li>
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/catalog" className="nav-link">Catalog</Link></li>
                        <li><Link to="/cart" className="nav-link">Cart</Link></li>
                        <li><Link to="/login" className="nav-link">logout</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
