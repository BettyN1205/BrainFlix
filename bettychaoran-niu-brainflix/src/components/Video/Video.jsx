import '../Video/video.scss';


const Video=({videoDetails})=>{
    return (
        <>
        <div className="video-container"> 
  <video className="video" controls poster={videoDetails[0].image}>
  {/* <source src={videoDetails[0].video} type="video/mp4" />
  <source src={videoDetails[0].video} type="video/webm" />
  <source src={videoDetails[0].video} type="video/ogg" /> */}
  </video>
  </div>
        </>
    )
}

export default Video;