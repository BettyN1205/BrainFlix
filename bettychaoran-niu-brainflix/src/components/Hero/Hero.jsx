import "../Hero/hero.scss";
import eye from '../../assets/Icons/views.svg'
import heart from '../../assets/Icons/likes.svg'

const Hero = () => {
  return (
    <>
      <section className="hero">
  <div className="hero__video-container"> 
  <video className="hero__video"></video>
  </div>
  <h1 className="hero__title">BMX Rampage: 2021 Highlights</h1>

  <div className="hero__details">
    <div className="hero__info-container">
    <div className="hero__info">
      <span className="hero__info-name">By Red Crow</span>
      <span className="hero__info-date">07/11/2021</span>
    </div>
    <div className="hero__info">
    <span className="hero__info-count"><img className="eyeIcon" src={eye} alt="eyeIcon" /> 1,001,023</span>
      <span className="hero__info-like"> <img className="heartIcon" src={heart} alt="heartIcon" /> 110,985</span>
    </div>
    </div>
    
    <p className="hero__description">
      On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
    </p>
  </div>
</section>

    </>
  );
};

export default Hero;
