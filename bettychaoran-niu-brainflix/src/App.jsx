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
const [videoDetails,setVideoDetails]=useState(details[0]);


const findID = (id) => {
  choseVideo(id);
}

const choseVideo=(id)=>{
  const chosedV=details.find((item)=>{
    return item.id===id;
  });
  setVideoDetails(chosedV);
}

const nonSelectedVideos=videoLists.filter((video)=>{
 return video.id !==videoDetails.id;
});


  return (
    <>
    <Header/>
    <Video videoDetails={videoDetails}/>

    <div className="main">
        <div className="video-section">
          <Hero videoDetails={videoDetails} />
          <Comments videoDetails={videoDetails}/>
        </div>

        <div className="next-section">
          <Next findID={findID} noChose={nonSelectedVideos}/>
        </div>
      </div>
      
    </>
  )
}

export default App
