import React from "react";
import Slider from "react-slick";
import './Carousel.css';
import signup from '../../../assets/Offer/Carousel/2023-fd-hp-signup-desktop-1x.png';
import deposit from '../../../assets/Offer/Carousel/2023-fd-hp-deposit-desktop-1x.png';
import nosweat from '../../../assets/Offer/Carousel/2023-fd-hp-nosweat-desktop-1x.png';

export default function SimpleSlider() {

    const offerDetails = [
        {
          imageSrc:
          signup,
          title: '1',
          heading: 'Join Fanduel',
          description: "Sign up and verify your identity, it's easy and takes less than 2 minutes",
        },
        {
          imageSrc:
          deposit,
          title: '2',
          heading: 'Make Your First Deposit',
          description: 'Fund your account with $10+',
        },
        {
          imageSrc:
          nosweat,
          title: '3',
          heading: 'No Sweat First Bet',
          description: "We'll refund you with up to $1000 in Free Bets if your first bet doesn't win",
        },
      ]

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
            {offerDetails.map((offer, index) => (
                        <div className='offer-card'>
                            <div className="offer-image" key={index}>
                                <img src={offer.imageSrc} alt="Image of fanduel phone" className='fanduel-phone' />
                            </div>
                        <div className='offer-details'>
                            <span className='offer-header uppercase brand-font-1 text-blue'>
                            Get in on the action
                            </span>
                            <div className='carousel-wrapper'>
                                <div className="carousel-parent" key={index}>
                                    <span className="carousel-number-wrapper">
                                        <h3 className="carousel-header brand-font-1 text-sky">{offer.title}</h3>
                                    </span>
                                    <span className="carousel-details-wrapper">
                                        <span className="carousel-title brand-font-1 uppercase text-blue">{offer.heading}</span>
                                        <h1 className="carousel-description brand-font-4 text-grey-blue">{offer.description}</h1>
                                    </span>
                                </div>
                            </div>
            
                        </div>
                    </div>

        ))}
      </Slider>
    );
  }