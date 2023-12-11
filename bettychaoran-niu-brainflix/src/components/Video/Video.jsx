import '../Video/video.scss';


const Video=({videoDetails})=>{
    return (
        <>
        <div className="video-container"> 
  <video className="video" controls poster={videoDetails.image}>
  <source src={videoDetails.video} />
  </video>
  </div>
        </>
    )
}

export default Video;