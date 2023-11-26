import "../Hero/hero.scss";
import eye from '../../assets/Icons/views.svg'
import heart from '../../assets/Icons/likes.svg'

const Hero = ({videoDetails}) => {

  return (
    <>
      <section className="hero">
  
  <h1 className="hero__title">{videoDetails.title}</h1>
  <div className="hero__details">
    <div className="hero__info-container">
    <div className="hero__info">
      <span className="hero__info-name">By {videoDetails.channel}</span>
      <span className="hero__info-date">{new Date(videoDetails.timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              })}</span>
    </div>
    <div className="hero__info">
    <span className="hero__info-count"><img className="eyeIcon" src={eye} alt="eyeIcon" /> {videoDetails.views}</span>
      <span className="hero__info-like"> <img className="heartIcon" src={heart} alt="heartIcon" /> {videoDetails.likes}</span>
    </div>
    </div>
    
    <p className="hero__description">
      {videoDetails.description}
    </p>
  </div>
</section>

    </>
  );
};

export default Hero;
