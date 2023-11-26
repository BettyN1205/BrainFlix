import "../Comments/comments.scss";
import plusIcon from "../../assets/Icons/add_comment.svg";

import { formatRelativeTime } from "../timeFormat";

const Comments = ({videoDetails}) => {
  const videoDetailsOne=videoDetails.comments;
  console.log(videoDetailsOne);


  return (
    <>
      <section className="comments">
        <h2 className="comments__title">3 Comments</h2>

        <div className="comments__add">
          <div className="comments__add-img"></div>
          <div className="comments__add-form">
            <h2 className="comments__add-form-title">JOIN THE CONVERSATION</h2>

            <input
              type="text"
              className="comments__add-form-input"
              placeholder="Add a new comment"
            />

            <div className="comments__add-form-submit">
              <img
                className="comments__add-form-submit-icon"
                src={plusIcon}
                alt="plusIcon"
              />
              COMMENT
            </div>
          </div>
        </div>

      {videoDetailsOne.map((comment) => (
        <div className="comments__history" key={comment.id}>
          <div className="comments__history-img"></div>
          <div className="comments__history-text">
            <span className="comments__history-title">{comment.name}</span>
            <span className="comments__history-time">
              {formatRelativeTime(comment.timestamp)}
            </span>
            <p className="comments__history-content">
              {comment.comment}
            </p>
          </div>
        </div>
      ))}



        
      </section>
    </>
  );
};

export default Comments;
