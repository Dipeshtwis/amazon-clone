import React from 'react'
import '../assets/stylesheet/Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
          <div className="home__container">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" />
            <div className="home__row">
              <Product
                id="4903883"
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
              />
              <Product
                id="49538094"
                title="Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)"
                price= {239}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                rating={4}
              />
            </div>
            <div className="home__row">
              <Product
                id="4903850"
                title="Noise ColorFit Pro 3 Smart Watch with 1.55 HD Color Touch Screen, SpO2, Sleep, & Stress Monitor, Personalised Watch Faces, 5 ATM Waterproof (Jet Black)"
                price= {199.99}
                image="https://m.media-amazon.com/images/I/61URhg0oLGL._AC_UY218_.jpg"
                rating={3}
              />
              <Product
                id="3254354"
                title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
                price= {598.99}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={5}
              />
              <Product
                id="49538094"
                title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
                price= {98.99}
                image="https://images-na.ssl-images-amazon.com/images/I/41NnaLXlzwL._SY300_SX300_.jpg"
                rating={4}
              />
            </div>
            <div className="home__row">
              <Product
                id="49538094"
                title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
                price= {539}
                image="https://m.media-amazon.com/images/I/51e6q1V73wL.jpg"
                rating={4}
              />
            </div>
          </div>
        </div>
    )
}

export default Home
