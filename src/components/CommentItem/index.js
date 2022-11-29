import { createMarkup, strHtmlAfterMarkup } from "../../helper";
import "./main.css";

function CommentItem({ item }) {
  const strMarkup = createMarkup(item.content);
  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          <a href="/#">
            <img src={item.author.avatar} alt="avtUser" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/#" className="comments__section--user">
            {item.author.nickname}
          </a>
          <p className="comments__section--time">{item.date}</p>
          <p className="comments__section--text">
            {strHtmlAfterMarkup(strMarkup)}
          </p>
          <i className="ion-reply comments__section--reply"></i>
        </div>
      </div>
      {/* Reply Comments */}
      {item.totalCommentReply > 0 && (
        <ul className="comments">
          <li className="item">
            <div className="comments__section">
              <div className="comments__section--avatar">
                <a href="/#">
                  <img src="./assets/images/avatar3.jpg" alt="a" />
                </a>
              </div>
              <div className="comments__section--content">
                <a href="/#" className="comments__section--user">
                  John Smith
                </a>
                <p className="comments__section--time">2 minutes ago</p>
                <p className="comments__section--text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                </p>
                {/* <i class="ion-reply comments__section--reply"></i> */}
              </div>
            </div>
          </li>
          <li className="item">
            <div className="comments__section">
              <div className="comments__section--avatar">
                <a href="/#">
                  <img src="./assets/images/avatar4.jpg" alt="a" />
                </a>
              </div>
              <div className="comments__section--content">
                <a href="/#" className="comments__section--user">
                  John Smith
                </a>
                <p className="comments__section--time">2 minutes ago</p>
                <p className="comments__section--text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt sequi odit exercitationem ma?
                </p>
                {/* <i class="ion-reply comments__section--reply"></i> */}
              </div>
            </div>
          </li>
        </ul>
      )}
      {/* Reply form */}
      <div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/#">
              <img src="./assets/images/avatar1.jpg" alt="a" />
            </a>
          </div>
          <textarea defaultValue={""} />
        </div>
        <div className="text-right">
          <button className="btn btn-default">Submit</button>
        </div>
      </div>
    </li>
  );
}

export default CommentItem;
