import React from 'react'
import './css/Footer.css'
import { linkedin, githubsm, twitter } from './Icons'
const Footer = () => {
  return (
    <footer className="footer text-center">
    <div className="container">
      <div className="main-footer">
        <a className="brand" href="https://dilums.github.io/">D<span>S</span></a>
        <div className="icons">
        <a href="https://www.linkedin.com/in/dilumsanjaya/">{linkedin}</a>
        <a href="https://github.com/dilums">{ githubsm }</a>
        <a href="https://twitter.com/DilumSanjaya">{ twitter }</a>
        </div>
      </div>
      <p className="copyright">Copyright © 2019 Dilum Sanjaya.</p>
    </div>
  </footer>
  )
}

export default Footer
