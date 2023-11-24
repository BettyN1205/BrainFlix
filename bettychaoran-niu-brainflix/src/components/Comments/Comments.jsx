import '../Comments/comments.scss';
import plusIcon from '../../assets/Icons/add_comment.svg'


const Comments = () => {
  return (
    <>
    <section class="comments">
  <h2 class="comments__title">3 Comments</h2>

  <div class="comments__add">
    <div class="comments__add-img"></div>
    <div class="comments__add-form">
    <h2 class="comments__add-form-title">JOIN THE CONVERSATION</h2>
    
        <input type="text" class="comments__add-form-input" placeholder="Add a new comment" />

      <div class="comments__add-form-submit">
        <img class="comments__add-form-submit-icon" src={plusIcon} alt="plusIcon" />
        COMMENT
      </div>
    </div>
  </div>

  <div class="comments__history">
    <div class="comments__history-img">img</div>
    <div class="comments__history-text">
      <h3 class="comments__history-title"></h3>
      <span class="comments__history-time"></span>
      <p class="comments__history-content"></p>
    </div>
  </div>
</section>
    </>
  );
};

export default Comments;
