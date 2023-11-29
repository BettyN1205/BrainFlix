import '../UploadForm/UploadForm.scss';
import upIcon from '../../assets/Icons/publish.svg'


const UploadForm = () => {
    return (
      <section className="upload-form">
        <h1 className="upload-form__title">Upload Video</h1>
        <h3 className="upload-form__subtitle">VIDEO THUMBNAIL</h3>
        <div className='upload-form__container'>
        <div className="upload-form__video">video</div>
        <form action="" className="upload-form__form">
          <label htmlFor="title" className="upload-form__form-label">TITLE YOUR VIDEO</label>
          <input type="text" name="title" className="upload-form__form-input" placeholder='Add a title to your video'/>
          
          <label htmlFor="description" className="upload-form__form-label">ADD A VIDEO DESCRIPTION</label>
          <textarea name="description" rows="3" className="upload-form__form-textarea" placeholder='Add a description to your video'/>
          
          <div className="upload-form__form-button-container">
            <img src={upIcon} alt="icon" className="upload-form__form-button-icon" />
            <button type="submit" className="upload-form__form-button">PUBLISH</button>
          </div>
        </form>

        </div>
        <p className="upload-form__cancel">CANCEL</p>
      </section>
    );
  };
  
  export default UploadForm;
  