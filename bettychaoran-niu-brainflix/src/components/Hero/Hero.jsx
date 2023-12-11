import "../Hero/hero.scss";
import eye from "../../assets/Icons/views.svg";
import heart from "../../assets/Icons/likes.svg";
import { useState } from "react";
import axios from "axios";

import { formatRelativeTime } from "../timeFormat";

const Hero = ({ videoDetails }) => {
  const [likes, setLikes] = useState(videoDetails.likes);

  const handleLikeClick = async () => {
    try {
      const response = await axios.put(`http://localhost:8010/video/${videoDetails.id}/likes`);
      setLikes(response.data.likes);
    } catch (error) {
      console.error("Error liking video:", error);
    }
  };

  return (
    <>
      <section className="hero">
        <h1 className="hero__title">{videoDetails.title}</h1>
        <div className="hero__details">
          <div className="hero__info-container">
            <div className="hero__info">
              <span className="hero__info-name">By {videoDetails.channel}</span>
              <span className="hero__info-date">
                {formatRelativeTime(videoDetails.timestamp)}
              </span>
            </div>
            <div className="hero__info">
              <span className="hero__info-count">
                <img className="eyeIcon" src={eye} alt="eyeIcon" />{" "}
                {videoDetails.views}
              </span>
              <span className="hero__info-like" onClick={handleLikeClick}>
                {" "}
                <img className="heartIcon" src={heart} alt="heartIcon" />{" "}
                {likes}
              </span>
            </div>
          </div>

          <p className="hero__description">{videoDetails.description}</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
