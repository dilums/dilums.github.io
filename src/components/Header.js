import React from 'react'
import './css/Header.css'
import { linkedin, githubsm, twitter } from './Icons'
const Header = () => {
  return (
    <header id="header">
    <div className="container">
            <div className="row hero-box align-items-center justify-content-center">
              <div className="col">
                <div className="banner text-center">
                    <h1 className="greeting">Hi! I'm Dilum Sanjaya</h1>
                    <h2 className="profession">Full Stack Developer</h2>
                    <div className="icons">
                    <a href="https://www.linkedin.com/in/dilumsanjaya/">{linkedin}</a>
                    <a href="https://github.com/dilums">{ githubsm }</a>
                    <a href="https://twitter.com/DilumSanjaya">{ twitter }</a>
                    </div>
                </div>
              </div>
            </div>
      </div>
</header>
  )
}

export default Header
