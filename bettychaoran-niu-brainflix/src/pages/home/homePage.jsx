import { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';

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
        const response = await axios.get("https://project-2-api.herokuapp.com/videos/?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03");
        // console.log(response);
        setVideoList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
      getList();
    }, []);

    const getDetails =async(id)=>{
      try {
          const response=await axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03`);
        // console.log(response.data);
        setVideoDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    //set defalt video
    useEffect(() => {
      getDetails('84e96018-4022-434e-80bf-000ce4cd12b8');
    }, []);

   
const findID = (id) => {
  (async () => {
    await getDetails(id);
  })();
};
    
    
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
              <Comments videoDetails={videoDetails}/>
            </div>
    
            <div className="next-section">
              <Next findID={findID} noChose={nonSelectedVideos}/>
            </div>
          </div>
          
        </>
      )


}

export default Homepage;