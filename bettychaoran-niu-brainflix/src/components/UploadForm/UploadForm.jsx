import '../UploadForm/UploadForm.scss';
import upIcon from '../../assets/Icons/publish.svg'
import { useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


const UploadForm = () => {

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const titleError=useRef(null);
  const desError=useRef(null);
  const [readySubmit,setReadySubmit]=useState(false);
  const [uploadSuccess,setUploadSuccess]=useState(false);
  const navigate = useNavigate();

  const handleTitle=(e)=>{
    setTitle(e.target.value);
  }

  const handleDes=(e)=>{
    setDescription(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!title){
      titleError.current.style.borderColor="#D22D2D";
      return
    }
    else if(!description){
      desError.current.style.borderColor="#D22D2D";
     return
    }
    else{
      setReadySubmit(true);
    }
    setTitle("")
    setDescription("")
    titleError.current.style.borderColor = "";
  desError.current.style.borderColor = "";

    console.log(title);
    console.log(description);
  }

  useEffect(() => {
    if (readySubmit) {
    
      setUploadSuccess(true);

      alert("Upload Successful!");
     
      const timeoutOne = setTimeout(() => {
        setUploadSuccess(false);
        navigate("/");
      }, 3000);
  
      // 清除定时器以避免内存泄漏
      return () => clearTimeout(timeoutOne);
    }
  }, [readySubmit, setUploadSuccess]);
  

    return (
      <section className="upload-form">
        <h1 className="upload-form__title">Upload Video</h1>
        <h3 className="upload-form__subtitle">VIDEO THUMBNAIL</h3>
        <div className='upload-form__container'>
        <div className="upload-form__video"></div>

        <form action="" className="upload-form__form" onSubmit={handleSubmit}>
          <label  className="upload-form__form-label">TITLE YOUR VIDEO</label>
          <input type="text" name="title" className="upload-form__form-input" placeholder='Add a title to your video'
          value={title} onChange={handleTitle}
          ref={titleError} />
          
          <label  className="upload-form__form-label">ADD A VIDEO DESCRIPTION</label>
          <textarea name="description" rows="3" className="upload-form__form-textarea" placeholder='Add a description to your video'
          value={description} onChange={handleDes}
          ref={desError}/>
          
          <div className="upload-form__form-button-container">
            <img src={upIcon} alt="icon" className="upload-form__form-button-icon" />
            <button type="submit" className="upload-form__form-button"  
           
            >PUBLISH</button>
          </div>
        </form>

        </div>
        <p className="upload-form__cancel">CANCEL</p>
      </section>
    );
  };
  
  export default UploadForm;
  