import React from 'react'
import './Topnav.css'
import logo from '../../../assets/Home/2023-fd-hp-logo-mobile-3x.png';

export default function hello() {
  return (
    <div className='nav-container'>
     <div className='nav-parent'>
        <div className='nav-child-left'>
            <img class="nav-logo-image" src={logo} alt="Fanduel Logo" />
        </div>
        <div className='nav-child-right'>
             <a href="https://account.sportsbook.fanduel.com/login/select-state" class='nav-login-btn'>Log In</a>
             <a href="https://account.sportsbook.fanduel.com/join/select-state" class='nav-join-btn'>Join</a>
        </div>
     </div>
    </div>
  )
}
