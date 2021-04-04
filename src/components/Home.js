import React from 'react'
import '../assets/stylesheet/Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
          <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
            <div className="home__row">
              <Product title="the lean story" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
              <Product id="49538094" title="Kenwood kMix Stand Mixer" price= {239} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={4} />
            </div>
            <div className="home__row">
              <Product />
              <Product />
              <Product />
            </div>
            <div className="home__row">
              <Product />
            </div>
          </div>
        </div>
    )
}

export default Home
