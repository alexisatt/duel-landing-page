import React from 'react'
import logo from '../../assets/Home/2023-fd-hp-logo-desktop-1x.png';
import mobileLogo from '../../assets/Home/2023-fd-hp-logo-mobile-3x.png';
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <div className='home-parent'>
            <div className='home-details'>
                <div className='fd-logo'>
                  <picture>
                    <source media="(max-width: 768px)" src={mobileLogo}/>
                    <img src={logo} alt="Fanduel Logo" />
                  </picture>
                </div>
                <div className="header-details-location">
                  <span className="primary-text uppercase brand-font-2 text-white ">
                    now live in maryland
                  </span>
                </div>
                <div className='header-details-callout'>
                  <span className="primary-text uppercase brand-font-2 text-white">
                      no sweat first bet
                    </span>
                </div>
                <div className='header-details-price'>
                  <span className="header-subtext primary-text uppercase brand-font-1 text-white"> UP <span className='d-block'>TO</span></span>
                  <span className="header-subscript brand-font-2 text-yellow">$</span>
                  <span className="header-price brand-font-2 text-yellow"> 1000 </span>
                </div>
                <div className='header-details-subtext text-white'>
                       Join America’s #1 Sportsbook today to get up to $1000 <span className="d-block">back in Free Bets if your first bet doesn’t win!</span>
                </div>
                <div className='cta-container'>
                <div className='primary-btn brand-font-3'>
                  <a href="https://www.fanduel.com/" className='primary-text uppercase'>
                  {" "}
                    join now{" "}
                  </a>
                </div>
              </div>
                <div className='header-details-legal'>
                  <span className="legal-text"> 21+ and present in MD. First online real money wager only. Refund issued as nonwithdrawable free bets that expire in 14 days. Restrictions apply. See terms at sportsbook.fanduel.com. Please play responsibly, for help visit mdgamblinghelp.org or call 1-800-GAMBLER </span>
                </div>
            </div>
        </div>

    </div>
  )
}

