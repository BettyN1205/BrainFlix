import "../UploadForm/UploadForm.scss";
import upIcon from "../../assets/Icons/publish.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";


const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleError = useRef(null);
  const desError = useRef(null);
  const [readySubmit, setReadySubmit] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDes = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      titleError.current.style.borderColor = "#D22D2D";
      return;
    } else if (!description) {
      desError.current.style.borderColor = "#D22D2D";
      return;
    } else {
      try {
        console.log("Axios Request Data:", { title, description });
        const response = await axios.post("http://localhost:8010/video", {
          title: title,
          channel: "",
          image: "https://i.imgur.com/8skqALn.jpeg",
          description: description,
          views: 0,
          likes: 0,
          duration: 0,
          video: "",
          timestamp:Date.now(),
          comments: [],
        });

        if (response.status === 201) {
          setReadySubmit(true);
        } else {
          console.error("Failed to upload video:", response.statusText);
        }
      } catch (error) {
        console.error("Error during video upload:", error);
      }
    }

    setTitle("");
    setDescription("");
    titleError.current.style.borderColor = "";
    desError.current.style.borderColor = "";

    console.log(title);
    console.log(description);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (readySubmit) {
        try {
          const response = await axios.get("http://localhost:8010/video");

          if (response.status === 200) {
            setUploadSuccess(true);
            alert("Upload Successful!");

            const timeoutOne = setTimeout(() => {
              setUploadSuccess(false);
              navigate("/");
            }, 3000);

            return () => clearTimeout(timeoutOne);
          } else {
            console.error(
              "Failed to fetch videos after upload:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error fetching videos after upload:", error.message);
        }
      }
    };

    fetchData();
  }, [readySubmit, setUploadSuccess, navigate]);

  return (
    <section className="upload-form">
      <h1 className="upload-form__title">Upload Video</h1>
      <h3 className="upload-form__subtitle">VIDEO THUMBNAIL</h3>
      <div className="upload-form__container">
        <div className="upload-form__video"></div>

        <form action="" className="upload-form__form" onSubmit={handleSubmit}>
          <label className="upload-form__form-label">TITLE YOUR VIDEO</label>
          <input
            type="text"
            name="title"
            className="upload-form__form-input"
            placeholder="Add a title to your video"
            value={title}
            onChange={handleTitle}
            ref={titleError}
          />

          <label className="upload-form__form-label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            name="description"
            rows="3"
            className="upload-form__form-textarea"
            placeholder="Add a description to your video"
            value={description}
            onChange={handleDes}
            ref={desError}
          />

          <div className="upload-form__form-button-container">
            <img
              src={upIcon}
              alt="icon"
              className="upload-form__form-button-icon"
            />
            <button type="submit" className="upload-form__form-button">
              PUBLISH
            </button>
          </div>
        </form>
      </div>
     <Link to={"/"} className="upload-form__cancel"><p>CANCEL</p></Link> 
    </section>
  );
};

export default UploadForm;
