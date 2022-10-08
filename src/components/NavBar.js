import React from 'react'
import "./Coin.css"

function  NavBar (onChangePage)  {

      function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <nav>
            <a onClick={handleLinkClick} href="/">CryptoTrack</a>
            <a onClick={handleLinkClick} href="/about">About</a>
              <a onClick={handleLinkClick} href="/login">Login</a>
            <a onClick={handleLinkClick} href="/services">Services</a>
        </nav>

    );
}

export default NavBar
