import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments';
import Next from '../../components/NextVideo/Next'

import axios from 'axios';


const Homepage=()=>{
    const [videoList, setVideoList] = useState([]); 
    const [videoDetails,setVideoDetails]=useState({});

    const {id} =useParams();

   
    useEffect(() => {

    const getList = async () => {
      try {
        // const response = await axios.get("https://project-2-api.herokuapp.com/videos/?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03");
        const response = await axios.get("http://localhost:8010/video");

        setVideoList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
      getList();
    }, []);

    const getDetails =async(id)=>{
      try {
          // const response=await axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03`);
          const response=await axios.get(`http://localhost:8010/video/${id}`);
       
        setVideoDetails(response.data);
        return response.data; 
      } catch (error) {
        console.log(error);
      }
    }

    //set defalt video
    useEffect(() => {
      if (id) {
        getDetails(id);
      } else {
        getDetails('84e96018-4022-434e-80bf-000ce4cd12b8'); 
        // getDetails(videoList[0].id);
        
        // Default video id
      }
    }, [id]); 
    
    const nonSelectedVideos=videoList.filter((video)=>{
     return video.id !==videoDetails.id;
    });
    
    
    
      return (
        <>
        <Header/>
        <Video videoDetails={videoDetails}/>
       
    
        <div className="main">
            <div className="video-section">
              <Hero videoDetails={videoDetails} />
              <Comments videoDetails={videoDetails} getDetails={getDetails}/>
            </div>
    
            <div className="next-section">
              <Next noChose={nonSelectedVideos}/>
            </div>
          </div>
          
        </>
      )


}

export default Homepage;