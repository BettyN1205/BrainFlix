import { useState } from 'react';

import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import Next from './components/NextVideo/Next'

import '../src/App.scss';

import details from './data/video-details.json';
import videoLists from './data/videos.json';


function App() {
const [videoList,setVideoList]=useState(videoLists);
const [videoDetails,setVideoDetails]=useState(details);

  return (
    <>
    <Header/>
    <Video videoDetails={videoDetails}/>

    <div className="main">
        <div className="video-section">
          <Hero videoDetails={videoDetails} />
          <Comments videoDetails={videoDetails} />
        </div>

        <div className="next-section">
          <Next videoList={videoList} />
        </div>
      </div>
      
    </>
  )
}

export default App
