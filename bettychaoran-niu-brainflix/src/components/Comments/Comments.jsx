import "../Comments/comments.scss";
import plusIcon from "../../assets/Icons/add_comment.svg";
import axios from "axios";

import { formatRelativeTime } from "../timeFormat";
import { useState } from "react";


const Comments = ({ videoDetails, getDetails }) => {
  const videoDetailsOne = videoDetails.comments;
  const [newComment, setNewComment] = useState("");
  const videoId = videoDetails.id;
  const [comments, setComments] = useState(videoDetailsOne);

  const handleOnChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleOnClick = async () => {
    try {

      await postComment(videoId, newComment);
      const updatedVedio = await getDetails(videoId);
      updatedVedio.comments.sort((a, b) => b.timestamp - a.timestamp);
      setComments(updatedVedio.comments);
      setNewComment(""); 
    } catch (error) {
      console.error(error);
    }
  };

  const postComment = async (id, comment) => {
    try {
      const response = await axios.post(
        `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03`,
        {
          name: "Betty",
          comment: comment,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //delete conmments
  //the logic is : the user can only delete his/her comment.
  //Supose the user named Betty
  //comments.name==="Betty"
  const handleDel = async (id, commentId) => {
    try {
      await deleteComment(id, commentId);
      const updatedVedio = await getDetails(videoId);
      updatedVedio.comments.sort((a, b) => b.timestamp - a.timestamp);
      setComments(updatedVedio.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (id, cid) => {
    try {
      const response = await axios.delete(
        `https://project-2-api.herokuapp.com/videos/${id}/comments/${cid}?api_key=47087c0f-ea42-4d3c-af60-13ee9dd49f03`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="comments">
        <h2 className="comments__title">3 Comments</h2>

        <div className="comments__add">
          <div className="comments__add-img"></div>
          <div className="comments__add-form">
            <h2 className="comments__add-form-title">JOIN THE CONVERSATION</h2>

            <textarea
              type="text"
              className="comments__add-form-input"
              placeholder="Add a new comment"
              value={newComment}
              onChange={handleOnChange}
            />

            <div className="comments__add-form-submit" onClick={handleOnClick}>
              <img
                className="comments__add-form-submit-icon"
                src={plusIcon}
                alt="plusIcon"
              />
              COMMENT
            </div>
          </div>
        </div>

        {videoDetailsOne?.map((comment) => (
          <div className="comments__history" key={comment.id}>
            <div className="comments__history-img"></div>
            <div className="comments__history-text">
              <span className="comments__history-title">{comment.name}</span>
              <span className="comments__history-time">
                {formatRelativeTime(comment.timestamp)}
              </span>
              <p className="comments__history-content">{comment.comment}</p>
              {comment.name === "Betty" && (
                <p
                  className="delBtn"
                  onClick={() => handleDel(videoDetails.id, comment.id)}
                >
  
                  delete
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Comments;
