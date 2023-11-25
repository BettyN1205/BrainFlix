import { useState } from 'react';

import Header from './components/Header/Header';
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
    <Hero videoDetails={videoDetails}/>
    <Comments videoDetails={videoDetails}/>
    <Next videoList={videoList}/>
      
    </>
  )
}

export default App
