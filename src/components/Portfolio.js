import React from 'react'
import './css/Portfolio.css'
import { github, website } from './Icons'
const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
    <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h1 className="text-capitalize section-heading">Portfolio</h1>
          </div>
        </div>
        <div className="row">           
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/1.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Olive Grove</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/olivegrove">{ github }</a>
                            <a href="https://dilums.github.io/olivegrove/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/2.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Movie Search</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/MovieSearch">{ github }</a>
                            <a href="https://dilums.github.io/MovieSearch/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/3.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Timeline</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/timeline">{ github }</a>
                            <a href="https://dilums.github.io/timeline/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/4.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Machine Learning</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/jsml">{ github }</a>
                            <a href="https://dilums.github.io/jsml/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/5.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">3D Animations</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/animations">{ github }</a>
                            <a href="https://dilums.github.io/animations/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>
              <div className="col-11 mx-auto col-sm-6 col-lg-4 my-3 item-container">
                  <div className="item">
                    <img src="/images/6.jpg" alt="menu item" className="img-fluid item-image"/>
      
                      <div className="item-details">
                          <h3 className="text-center">Graphs</h3>
                          <div className="text-center icons">
                            <a href="https://github.com/dilums/d3-graphs">{ github }</a>
                            <a href="https://dilums.github.io/d3-graphs/">{ website }</a>
                          </div>
                      </div>
      
                  </div>
                </div>       
        </div>
    </div>
  </section>
  )
}

export default Portfolio
